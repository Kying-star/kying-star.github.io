class Mypromise {
    constructor(exec){
        this.state = "pending";
        this.value = null;
        this.reason = null;
        this.onFufilledCBList = [];
        this.onRejectCBList = [];
        exec(this.resolve,this.reject)
    }
    resolve = (value) => {
        if(this.state === 'pending'){
            this.state = 'fulfilled';
            this.value = value;
            while(this.onFufilledCBList.length > 0){
                this.onFufilledCBList[0](value);
                this.onFufilledCBList.shift()
            }
        }
    };
    reject = (reason) => {
        if(this.state === 'pending'){
            this.state = 'rejected';
            this.reason = reason;
            this.onRejectCB = this.onRejectCB(reason);
        }
    };
    then(onFufilled, onRejected){
        let promise2 = new Mypromise((resolve, reject) =>{
            if(this.state === 'fulfilled'){
                let x = onFufilled(this.value);
                this.isPromise(x, resolve, reject)
            }else if(this.state == 'rejected'){
                onRejected(this.reason);
            }else if(this.state == 'pending'){
                this.onFufilledCBList.push(onFufilled)
                this.onRejectCBList.push(onRejected)
            }
        })
        return promise2
    }
    isPromise(x, resolve,reject){
        if(x == Mypromise){
            x.then(resolve,reject)
        }else{
            resolve(x)
        }
    }
}
const promise = new Mypromise((resolve, reject) => {
    // 目前这里只处理同步的问题
    setTimeout(()=>{
        resolve('success')
    },2000)
})
promise.then(e=>{
    console.log(e)
    return 2
})
.then(e=>{
    console.log(e)
    return 3
})
.then(e=>{
    console.log(e)
})