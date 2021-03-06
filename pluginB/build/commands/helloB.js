"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const toolbelt_api_test_1 = require("@thiagoveras/toolbelt-api-test");
class HelloB extends command_1.Command {
    async run() {
        this.parse(HelloB);
        this.log(`Hello from Plugin B at ${toolbelt_api_test_1.Display.time()}`);
    }
}
exports.default = HelloB;
HelloB.description = 'Single Command from Plugin B';
HelloB.examples = [
    `$ clitest helloB`
];
HelloB.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
HelloB.args = [{ name: 'file' }];
