class View {
  static help() {
    console.log(`
    node main.js show <female>
    node main.js add <input>
    node main.js update <field> <value> <id>
    node main.js get <female/age> <email>
    `)
  }

  static display(data) {
    console.log(data)
  }
}
module.exports = View