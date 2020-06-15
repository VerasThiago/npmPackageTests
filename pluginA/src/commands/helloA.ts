import {Command, flags} from '@oclif/command'
import {Display} from '@thiagoveras/toolbelt-api-test'

export default  class HelloA extends Command {
  static description = 'Single Command from Plugin A'

  static examples = [
    `$ clitest helloA`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    this.parse(HelloA)

    this.log(`Hello from Plugin A at ${Display.time()}`)
  }
}
