import {Command, flags} from '@oclif/command'
import Display from '@thiagoveras/toolbelt-api-test'

export default class HelloB extends Command {
  static description = 'Single Command from Plugin B'

  static examples = [
    `$ clitest helloB`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    this.parse(HelloB)

    this.log(`Hello from Plugin B at ${Display.time()}`)
    
  }
}
