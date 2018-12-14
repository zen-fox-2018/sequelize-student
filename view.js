class View {
  static generalError(err){
    console.log(err);
  }

  static createSuccess(data){
    console.log('create success');
    console.log(data);
  }

  static updateSuccess(data){
    console.log('update success');
    console.log(data);
  }

  static showFullName(data){
    console.log(data);
  }

  static showAge(data){
    console.log(data);
  }

  static default(){
    console.log('wrong command');
  }
}

module.exports = View
