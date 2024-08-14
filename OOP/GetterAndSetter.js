// class User{
//     constructor(email,passward) {
//         this.email = email;
//         this.passward = passward
//     }
//     get email(){
//         return this._email.toUpperCase()
//        }
//        set email(value){
//          this._email = value
//        }

       
//    get passward(){
//     return this._passward.toUpperCase()
//    }
//    set passward(value){
//      this._passward = value.toUpperCase()
//    }


// }

// const hitesh = new User("hitesh","avdfg")
// console.log(hitesh.passward);
// console.log(hitesh.email);



// old version


// function User(email,passward){
//     this._email = email;
//     this._passward = passward

//     Object.defineProperty(this,'email'.{
//         get : function(){
//             return this._email.toUppercase()

//         },
//         set : function(value){
//           this.email = value
//         }
//     })
// }



