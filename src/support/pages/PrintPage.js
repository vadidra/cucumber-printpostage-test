//import Base from '../Base'

class PrintPage {
    
    get printOn(){
        return $('[name="PrintMedia"]');
    }

    get serial(){
        return $('[name="NsSerial"]');
    }

    get mailFromZIP(){
        return $('[name="unauthFromZip"]');
    }

    get mailTo(){
        return $('[name="ShipCountryCode"]');
    }

    get weightLbs(){
        return $('[name="WeightLbs"]');
    }

    get weightOz(){
        return $('[name="WeightOz"]');
    }

    get weight(){
        return $('#filtered_transactions_for_account');
    }

    get service(){
        return $('[name="Service"]');
    }

    setPrintOn(media){
        return $('#filtered_transactions_for_account');
    }

    setSerial(serial){
        return $('[name="NsSerial"]');
    }

    setMailFromZIP(zip){
        return $('[name="unauthFromZip"]');
    }

    setMailTo(country){
        return $('[name="ShipCountryCode"]');
    }

    setWeightLbs(lbs){
        return $('[name="WeightLbs"]');
    }

    setWeightOz(oz){
        return $('[name="WeightOz"]');
    }

    setWeightOz(lbs,oz){
        return $('[name="WeightOz"]');
    }

    get weight_1(){
        return $('#filtered_transactions_for_account');
    }

    setServiceTo(service){
        return $('[name="Service"]');
    }

    //fillDescription(text){
    //    this.descriptionInput.waitForExist();
    //    this.descriptionInput.setValue(text);
    //}

    //printStamps(){
    //    this.printStamps.click();
    //}

    //resultsTableIsVisible(){
    //    this.resultsTable.waitForExist();
    //}
}

export default new PrintPage()