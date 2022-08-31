class Mouse {
    constructor(name, weight, speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.alive = true;
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

    getAlive (){
        return this.alive;
    } 
    setAlive (alive){
        this.alive = alive;
    }

    getSound (){
        alert("chít chít");
    }
}