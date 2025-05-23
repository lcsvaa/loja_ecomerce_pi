        // Menu Hamburguer
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const navCenter = document.getElementById('nav-center');
        const navRight = document.getElementById('nav-right');
        const body = document.body;

        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navCenter.classList.toggle('open');
            navRight.classList.toggle('open');
            body.classList.toggle('menu-open');
            
            if (hamburgerMenu.classList.contains('active')) {
                document.querySelectorAll('.hamburger-line').forEach((line, index) => {
                    if (index === 0) line.style.transform = 'translateY(8px) rotate(45deg)';
                    if (index === 1) line.style.opacity = '0';
                    if (index === 2) line.style.transform = 'translateY(-8px) rotate(-45deg)';
                });
            } else {
                document.querySelectorAll('.hamburger-line').forEach(line => {
                    line.style.transform = '';
                    line.style.opacity = '';
                });
            }
        });

        // Tabs de Login/Cadastro
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');
        
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                authTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all forms
                authForms.forEach(form => form.classList.remove('active'));
                // Show the selected form
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(`${tabId}-form`).classList.add('active');
            });
        });

        // Toggle Password Visibility
        const togglePasswordIcons = document.querySelectorAll('.toggle-password');
        
        togglePasswordIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const passwordInput = document.getElementById(targetId);
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                // Toggle eye icon
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            });
        });

        // Máscara para CPF
        const cpfInput = document.getElementById('register-cpf');
        const cpfError = document.getElementById('cpf-error');

        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            // Aplica a máscara
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            
            e.target.value = value;
        });

        // Validação de CPF
        function validarCPF(cpf) {
            cpf = cpf.replace(/[^\d]+/g,'');
            
            if(cpf == '') return false;
            
            // Elimina CPFs invalidos conhecidos
            if (cpf.length != 11 || 
                cpf == "00000000000" || 
                cpf == "11111111111" || 
                cpf == "22222222222" || 
                cpf == "33333333333" || 
                cpf == "44444444444" || 
                cpf == "55555555555" || 
                cpf == "66666666666" || 
                cpf == "77777777777" || 
                cpf == "88888888888" || 
                cpf == "99999999999")
                return false;
                
            // Valida 1o digito
            let add = 0;
            for (let i=0; i < 9; i ++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
            let rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                return false;
                
            // Valida 2o digito
            add = 0;
            for (let i = 0; i < 10; i ++)
                add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(10)))
                return false;
                
            return true;
        }

        cpfInput.addEventListener('blur', function() {
            if (this.value.length === 0) {
                cpfError.style.display = 'none';
                return;
            }
            
            const cpfValido = validarCPF(this.value);
            
            if (!cpfValido) {
                cpfError.style.display = 'block';
                this.classList.add('invalid');
            } else {
                cpfError.style.display = 'none';
                this.classList.remove('invalid');
            }
        });

        // Form Validation and Submission (will be enhanced with PHP later)
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (!email || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Here you would normally send data to server
            console.log('Login submitted:', { email, password });
            // For now, just redirect to account page
            window.location.href = 'minha-conta.html';
        });
        
        document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const cpf = document.getElementById('register-cpf').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm').value;
            const termsAccepted = document.getElementById('accept-terms').checked;
            
            if (!name || !email || !cpf || !password || !confirmPassword) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Valida CPF
            if (!validarCPF(cpf)) {
                cpfError.style.display = 'block';
                cpfInput.classList.add('invalid');
                alert('Por favor, insira um CPF válido.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }
            
            if (password.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }
            
            if (!termsAccepted) {
                alert('Você deve aceitar os termos e condições.');
                return;
            }
            
            // Here you would normally send data to server
            console.log('Registration submitted:', { name, email, cpf, password });
            // For now, just show success message and switch to login
            alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
            document.querySelector('.auth-tab[data-tab="login"]').click();
        });