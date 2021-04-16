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

    get service(){
        return $('[name="Service"]');
    }

}

export default new PrintPage()