class Bus{
	private data:Map<string,any>
	constructor(){
		this.data = new Map()
	}
	
	set(key:any,value:any){
		this.data.set(key,value)
	}
	
	get(key:any){
		return this.data.get(key)
	}
}

export default new Bus()