function updaTeGrandTotalByUseCoupon(){
    const couponNewOfferString = document.getElementById('coupon-new-str').innerText;
    const couponCoupleString = document.getElementById('coupon-couple').innerText;
    const couponApplyField = document.getElementById('counpon-apply-field').value;
    const currentGrandTotal = getElementValueById('grand-total');
    if(currentGrandTotal < 2000){
        alert('you have already got this coupon');
        return;
    }
    if(couponApplyField === couponNewOfferString){
        let discoutNewOffer = currentGrandTotal * (15 /100);
        const newGrandTotal = currentGrandTotal - discoutNewOffer;
        setValueById('grand-total', newGrandTotal);
    
     // ________________add NEW15 coupon discount amount_________________//
     function setDiscountCountonHtmlElement(){
        const discountContainer = document.getElementById('dis-coupon-price');
        const element = `<p>Total discount:</p><p>${discoutNewOffer}</p>BDT`
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between', 'font-bold');
        div.innerHTML = element;
        discountContainer.appendChild(div);
        //    ---------------hide coupon button & field----------------------//
        const disabledButton = document.getElementById('disable-btn');
        const disabledCouponField = document.getElementById('counpon-apply-field');
            disabledButton.classList.add('hidden');
            disabledCouponField.classList.add('hidden');

    }
    setDiscountCountonHtmlElement();
}
 else if(couponApplyField === couponCoupleString){
            let discountCoupleOffer =currentGrandTotal  * (20 /100);
            const updateGrandTotal = currentGrandTotal - discountCoupleOffer;

            setValueById('grand-total', updateGrandTotal);
              // ______add Couple 20 coupon discount amount_____//
          function setDiscountCountonHtmlElement(){
            const discountContainer = document.getElementById('dis-coupon-price');
            const element = `<p>Total discount:</p><p>BDT ${discountCoupleOffer}</p>`
            const div = document.createElement('div');
            div.classList.add('flex', 'justify-between', 'font-bold', 'p-3');
            div.innerHTML = element;
            discountContainer.appendChild(div);
        // ---------------hide coupon button & field----------------------//
            const disabledButton = document.getElementById('disable-btn');
            const disabledCouponField = document.getElementById('counpon-apply-field');
                disabledButton.classList.add('hidden');
                disabledCouponField.classList.add('hidden');
        }
        setDiscountCountonHtmlElement();
        }
        else{
            alert('type right coupon');
            return
        }
    }; 
    

    



   