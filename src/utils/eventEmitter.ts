

class EventEmmiter{
	private eventList:Map<string,Function> = new Map()
	constructor(){
		this.eventList = new Map()
	}
	
	on(event:string,callback:Function):void{
		this.eventList.set(event,callback)
	}
	
	emit(event:string,...args:any):void{
		const fn = this.eventList.get(event) as Function
		fn(...args)
	}
}

export default new EventEmmiter()