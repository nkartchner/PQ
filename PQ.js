module.exports = class PQ
{
    constructor(data=null) 
    {
        this.data = [];
        if(data) this.data.push(data);
        this.count = 0;
    }
    
    isEmpty()
    {
        return this.count === 0;
    }

    add(val)
    {
        if(val < 0) return false;
        if(!this.data)
        {
            this.data[0] = val;
            return true;
        }
        else
        {
            this.forEach((e,i) => 
            {
                if(val>e) 
                {
                    this.data.splice(i,0,val);
                    ++this.count;
                    return true; 
                }
            });
            // throw "Something went wrong";
            return false;
        }
            
    }

    contains(val)
    {
        this.foreach(e=>
        {
            if(val == e) return true;
        });
        return false;
    }

    size(){
        return this.count;
    }

    remove(e) 
    {
        if(this.count === 0 || !this.contains(e))
        {
            
        }
    }

};

//add --> boolean
//contains --> boolean
//size --> int
// remove --> val||null
