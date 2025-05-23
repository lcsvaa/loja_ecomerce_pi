        // Script para alternar entre abas
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove a classe active de todas as tabs e conteúdos
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
                
                // Adiciona a classe active à tab clicada
                tab.classList.add('active');
                
                // Mostra o conteúdo correspondente
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).style.display = 'block';
            });
        });
        
        // Script para navegação na sidebar
        document.querySelectorAll('.admin-nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove a classe active de todos os links
                document.querySelectorAll('.admin-nav a').forEach(l => l.classList.remove('active'));
                
                // Adiciona a classe active ao link clicado
                link.classList.add('active');
                
                // Rola até a seção correspondente
                const sectionId = link.getAttribute('href');
                document.querySelector(sectionId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Simulação de filtros (seria implementado com JavaScript real ou backend)
        document.getElementById('produto-categoria').addEventListener('change', function() {
            console.log('Filtrando por categoria:', this.value);
            // Aqui você implementaria a filtragem real dos produtos
        });
        
        document.getElementById('estoque-filtro').addEventListener('change', function() {
            console.log('Filtrando estoque por:', this.value);
            // Aqui você implementaria a filtragem real do estoque
        });
        
        // Adicionar eventos para os formulários (seria implementado com JavaScript real ou backend)
        document.querySelectorAll('button.btn-primary, button.btn-success').forEach(button => {
            button.addEventListener('click', function() {
                console.log('Botão clicado:', this.textContent.trim());
                // Aqui você implementaria a lógica para salvar/adicionar/editar
            });
        });