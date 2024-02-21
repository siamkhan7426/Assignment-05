const seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4']
for(const seat of seats){
    const selectSeat = document.getElementById(seat);
    selectSeat.addEventListener('click', setAll);    

    function setAll(){
        
        
        //_______________set remain seats_________________//
        const currentSeats = getElementValueById('remain-seats');
        if(currentSeats === 37){
            const disabledButton = document.getElementById('disable-btn');
            disabledButton.removeAttribute('disabled')
        }
        if(currentSeats <37){
            alert('You can not select more than 4 seats')
            return;
        }
        const updateSets = currentSeats - 1;
        setValueById('remain-seats', updateSets);
        selectSeat.classList.add('bg-[#1DD100]');
        

        // _______________________selected seats details___________________//
          const selectedSeatDetailsContainer = document.getElementById('selected-seat-details');
          const element = `<p>Seat Name: ${seat}</p><p>Economy</p><p>Price: 550</p>`;
          const div =document.createElement('div');
          div.classList.add('flex', 'justify-between');
          div.innerHTML = element;
          selectedSeatDetailsContainer.appendChild(div);

        // __________________ set selected sets______________//
        const currentSelectedSeats = getElementValueById('selceted-seat');
        const updaSelectedSeats = currentSelectedSeats + 1;
        setValueById('selceted-seat', updaSelectedSeats);
        

        //______________________set total price____________________//
        const currentTotal = getElementValueById('current-total');
        const updateTotal = currentTotal + 550;
        setValueById('current-total', updateTotal);
        setValueById('grand-total', updateTotal);
             
       
       
        selectSeat.addEventListener('click', function(){
            
        })
        //---------------- uses seats disabled--------------------//
        selectSeat.disabled = true; 

        // ---------------Next button validation---------------------//
        function openNextBtn(){
            let nextBtn = document.getElementById('next-btn');
            const numberInputValue = document.getElementById('number-field').value;
            if(numberInputValue !== ''){
                nextBtn.removeAttribute('disabled');
                console.log(nextBtn);
            }
            else{
                nextBtn.setAttribute('disabled');
            }
        }
        openNextBtn();
    };

    function nextBtnAnableByInputValue (){
        const numberInputValue = document.getElementById('number-field');
        let nextBtn = document.getElementById('next-btn');
        if(numberInputValue.value !== ''){
          nextBtn.disabled = false;
        }
        else{
            nextBtn.disabled = true;
        }
    }
};