class Cat {
    constructor (name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;   
    }

    getName (){
        return this.name;
    }
    setName (name){
        this.name = name;
    }

    getWeight (){
        return this.weight;
    }
    setName (weight){
        this.weight = weight;
    }

    getSpeed (){
        return this.speed;
    }
    setName (speed){
        this.speed = speed;
    }
    
    getSound (){
        alert("meo meo");
    }

    catchMouse (mouse) {
        let weightOfMouse = mouse.getWeight();
        let speedOfMouse = mouse.getSpeed();
        let mouseAlive = mouse.getAlive();
        if (speedOfMouse < this.speed && mouseAlive) {
            alert (this.name + " cat catch " + mouse.getName() + " mouse");
            this.weight += weightOfMouse;
            mouse.setAlive (false);
        }else {
            alert (this.name + "cat can't catch " + mouse.getName() + " mouse");
        }
    }
}