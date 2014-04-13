## Controllers

Controllers can be considered the base object for all interoperability. Controllers are responsible for accepting, dispatching and propagating **Commands**.

Controllers have children, which commands are **Tunneled** to and parents which commands are **Bubbled** to.

### Propagation

Commands go through three phrases of propagation. `Preview`, `Handler` and `Executed`.

1. Commands will be tunneled to all children, first as a `Preview` which any child controller can terminate or edit the command - allowing plugins to intercept and cancel or edit any command.
2. Commands are then tunneled searching for a `Handler` which is expected to mark the command as a success or failure.
3. Once handled, a Command and it's result are tunneled to all children allowing any child controller to see the command was executed and the result of the `Handler`

Commands are propagated as depth-first.

#### Example

![alt text]({{assets}}/images/architecture-controllers-command-propagation.png "Architecture - Controllers - Example Layout")

A command tunneled to **Instance** will follow the following path for `Preview`, `Handler` and `Executed`.

**Instance** > **Connection** > **Plugin** > **Security**

If the **Plugin** accepts a `Preview` of the command and marks its result as `Cancel` then the command will cease propagation and not run through the `Handler` or `Executed` steps.

##### References

- [Procon.Core.Shared.Command](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/Command.cs)
- [Procon.Core.Shared.CommandResultType](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/CommandResultType.cs)