        // Variáveis para o sistema de agendamento
        let currentDate = new Date();
        let selectedDate = null;
        let selectedTime = null;
        const workingHours = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

        function showPage(pageId) {
            // 1. Esconder todas as seções
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // 2. Mostrar a seção desejada
            const activeSection = document.getElementById(pageId);
            if (activeSection) {
                activeSection.classList.remove('hidden');
                // Scroll para o topo suavemente
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Se for a página de agendamento, inicializar o calendário
                if (pageId === 'booking') {
                    setTimeout(() => {
                        updateCalendar();
                        updateTimeSlots();
                    }, 100);
                }
            }

            // 3. Atualizar o link ativo no menu
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Verifica se o onclick desse link aponta para a pagina atual
                if (link.getAttribute('onclick').includes(pageId)) {
                    link.classList.add('active');
                }
            });

            // 4. Fechar menu mobile se estiver aberto
            const navbar = document.getElementById('navbar');
            navbar.classList.remove('mobile-active');
        }

        function toggleMobileMenu() {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('mobile-active');
        }

        // Funções para o sistema de agendamento
        function updateCalendar() {
            const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

            // Atualizar título do mês
            document.getElementById('currentMonth').textContent =
                `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

            // Gerar dias do calendário
            const calendarDays = document.getElementById('calendarDays');
            calendarDays.innerHTML = '';

            // Adicionar cabeçalho dos dias da semana
            const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
            daysOfWeek.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.style.fontWeight = '600';
                dayElement.textContent = day;
                calendarDays.appendChild(dayElement);
            });

            // Primeiro dia do mês
            const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            // Último dia do mês
            const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

            // Dias em branco antes do primeiro dia
            for (let i = 0; i < firstDay.getDay(); i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day';
                emptyDay.style.visibility = 'hidden';
                calendarDays.appendChild(emptyDay);
            }

            // Dias do mês
            for (let day = 1; day <= lastDay.getDate(); day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = day;

                // Verificar se é hoje
                const today = new Date();
                if (currentDate.getMonth() === today.getMonth() &&
                    currentDate.getFullYear() === today.getFullYear() &&
                    day === today.getDate()) {
                    dayElement.style.fontWeight = '700';
                    dayElement.style.color = 'var(--primary)';
                }

                // Verificar se é o dia selecionado
                if (selectedDate &&
                    currentDate.getMonth() === selectedDate.getMonth() &&
                    currentDate.getFullYear() === selectedDate.getFullYear() &&
                    day === selectedDate.getDate()) {
                    dayElement.classList.add('selected');
                }

                // Adicionar evento de clique
                dayElement.addEventListener('click', () => {
                    selectDay(day);
                });

                calendarDays.appendChild(dayElement);
            }
        }

        function selectDay(day) {
            selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

            // Remover seleção anterior
            const allDays = document.querySelectorAll('.calendar-day');
            allDays.forEach(dayElement => {
                dayElement.classList.remove('selected');
            });

            // Adicionar seleção atual
            const selectedDayElement = Array.from(allDays).find(element =>
                element.textContent === day.toString() && !element.style.fontWeight);
            if (selectedDayElement) {
                selectedDayElement.classList.add('selected');
            }

            // Atualizar horários disponíveis
            updateTimeSlots();

            // Atualizar campo de data/hora
            updateSelectedDateTime();
        }

        function changeMonth(direction) {
            currentDate.setMonth(currentDate.getMonth() + direction);
            selectedDate = null;
            selectedTime = null;
            updateCalendar();
            updateTimeSlots();
            updateSelectedDateTime();
        }

        function updateTimeSlots() {
            const timeSlotsContainer = document.getElementById('timeSlots');
            timeSlotsContainer.innerHTML = '';

            if (!selectedDate) {
                const message = document.createElement('div');
                message.textContent = 'Selecione uma data primeiro';
                message.style.gridColumn = '1 / -1';
                message.style.textAlign = 'center';
                message.style.color = 'var(--gray)';
                timeSlotsContainer.appendChild(message);
                return;
            }

            // Gerar horários disponíveis
            workingHours.forEach(time => {
                const timeSlot = document.createElement('div');
                timeSlot.className = 'time-slot';
                timeSlot.textContent = time;

                // Verificar se é o horário selecionado
                if (selectedTime === time) {
                    timeSlot.classList.add('selected');
                }

                // Adicionar evento de clique
                timeSlot.addEventListener('click', () => {
                    selectTime(time);
                });

                timeSlotsContainer.appendChild(timeSlot);
            });
        }

        function selectTime(time) {
            selectedTime = time;

            // Remover seleção anterior
            const allTimeSlots = document.querySelectorAll('.time-slot');
            allTimeSlots.forEach(slot => {
                slot.classList.remove('selected');
            });

            // Adicionar seleção atual
            const selectedSlot = Array.from(allTimeSlots).find(slot => slot.textContent === time);
            if (selectedSlot) {
                selectedSlot.classList.add('selected');
            }

            // Atualizar campo de data/hora
            updateSelectedDateTime();
        }

        function updateSelectedDateTime() {
            const dateTimeField = document.getElementById('selectedDateTime');

            if (selectedDate && selectedTime) {
                const day = selectedDate.getDate().toString().padStart(2, '0');
                const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
                const year = selectedDate.getFullYear();

                dateTimeField.value = `${day}/${month}/${year} às ${selectedTime}`;
            } else if (selectedDate) {
                const day = selectedDate.getDate().toString().padStart(2, '0');
                const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
                const year = selectedDate.getFullYear();

                dateTimeField.value = `${day}/${month}/${year} - Selecione um horário`;
            } else {
                dateTimeField.value = 'Selecione uma data e horário';
            }
        }

        function confirmBooking() {
            if (!selectedDate || !selectedTime) {
                alert('Por favor, selecione uma data e horário antes de confirmar.');
                return;
            }

            const clientName = document.getElementById('clientName').value;
            const clientPhone = document.getElementById('clientPhone').value;
            const petName = document.getElementById('petName').value;
            const petSpecies = document.getElementById('petSpecies').value;
            const consultType = document.getElementById('consultType').value;
            const vet = document.getElementById('vetSelect').value;

            const day = selectedDate.getDate().toString().padStart(2, '0');
            const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
            const year = selectedDate.getFullYear();

            const confirmationMessage = `
                ✅ Consulta Agendada!

                📅 Data: ${day}/${month}/${year}
                ⏰ Horário: ${selectedTime}
                👤 Tutor: ${clientName}
                📞 Telefone: ${clientPhone}
                🐾 Pet: ${petName} (${petSpecies})
                🩺 Motivo: ${consultType}
                👩‍⚕️ Veterinário: ${vet}

                Obrigado por agendar conosco!
                Enviamos os detalhes para seu e-mail.
                Chegue 10 minutos antes do horário marcado.
                Não esqueça de trazer a carteirinha de vacinação!
            `;

            alert(confirmationMessage);

            // Resetar formulário
            document.querySelector('form').reset();
            selectedDate = null;
            selectedTime = null;
            updateCalendar();
            updateTimeSlots();
            updateSelectedDateTime();
        }

        // Inicializar na Home
        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
        });