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
            
            // Animação das linhas do hamburguer
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

        // Seleção de tamanhos nos filtros
        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', function() {
                this.parentElement.querySelector('.size-option.selected')?.classList.remove('selected');
                this.classList.add('selected');
            });
        });

        // Seleção de tamanhos nos produtos
        document.querySelectorAll('.tamanho-option:not(.esgotado)').forEach(option => {
            option.addEventListener('click', function() {
                this.parentElement.querySelector('.tamanho-option.selected')?.classList.remove('selected');
                this.classList.add('selected');
            });
        });