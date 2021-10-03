const Counter = {
	data() {
	  return {
		  list: undefined,
		  status: 0, 
		  todo: JSON.parse(localStorage.getItem('data')), 
		  rand: Math.floor(Math.random() * 90000), 
		  index: null, 
	  }
	},
	methods: { 
		CreateTodo(e) {

			// get value in input
			e.preventDefault()
			const list_value = this.list
			const status = this.status
			//  check value and create todo 
			if(list_value) { 
				// create append data in list
				const data = [{id: this.rand, "list": list_value, "status": status}]

				// update data 
				if(this.index !== null) { 
	
					this.todo[this.index] = data[0]
					localStorage.setItem("data", JSON.stringify(this.todo))
					alert("sucess Edit Todo")
					location.reload()



				}else { 

				if(this.todo) { 
					this.todo.push(data[0])
					localStorage.setItem("data", JSON.stringify(this.todo))

				}
				//  create todo not data in localstorage
				else  { 
					localStorage.setItem("data", JSON.stringify(data))
				}

			// message 
			alert("sucess Create Todo")
			location.reload()

			}

		}
			//  required data 
			else { 
				alert("required")
			}
			// sucess create todo
			
		}, 

		UpdateButton(data, index, e) {
			e.preventDefault()

			this.index = index
			this.status = data.status
			this.list = data.list
			
		},
		DeleteTodo(arr, index) { 
			// confrim delete
			let confrimations = confirm("You Are Delete") 

			// if confim yes, delete elemet 
			if(confrimations) { 

				arr.splice(index, 1)
				localStorage.setItem('data', JSON.stringify(arr))
				alert("sucess Delete Data")
				location.reload()


			}
	}
  }

}
  
Vue.createApp(Counter).mount('#app')
  


