## Commands

> You can find a plugin example showing commands in action at [Procon.Examples.Plugins.Commands.Test](https://github.com/Myrcon/Procon-2/tree/master/src/Procon.Examples.Plugins.Commands.Test)

Procon communicates between controllers with standardized **Commands**.

### Naming

**Commands** can be setup to dispatch with a value in the ```CommandType``` enumerator.

```C#
var command = new Command() {
    CommandType = CommandType.ConnectionQuery
};

// command.Name == "ConnectionQuery"
// command.CommandType == CommandType.ConnectionQuery
```

A custom command that does not exist within ```CommandType``` can be setup with an arbitrary string in the ```Name``` property of ```CommandDispatch```

```C#
var command = new Command() {
    Name = "ExampleCommand"
};

// command.Name == "ExampleCommand"
// command.CommandType == CommandType.None
```

#### References

- [Procon.Core.Shared.Command](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/Command.cs)

> All commands are dispatched on the ```Name``` property. The ```CommandType => Name``` is syntactic sugar for developing Core.

### Dispatching

Dispatching commands is setup in the constructor of the controller.

```C#
public class ExampleController : CoreController() {
    public ExampleController() : CoreController() {
        this.CommandDispatchers.AddRange(new List<ICommandDispatch>() {
            new CommandDispatch() {
                Name = "ExampleCommand",
                Handler = this.ExampleCommandHandler
            }
        }
    }

    public ICommandResult ExampleCommandHandler(
        ICommand command, Dictionary<String, ICommandParameter> parameters) {
        // Logic here for handling command
    }
}
```

#### References

- [Procon.Core.Shared.CoreController](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/CoreController.cs)
- [Procon.Core.Shared.ICommandDispatch](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/ICommandDispatch.cs)
- [Procon.Core.Shared.CommandDispatch](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/CommandDispatch.cs)
- [Procon.Core.Shared.ICommandParameter](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/ICommandParameter.cs)

### Parameters

**Commands** take a range of parameters. Most of the models found with Procon.Net and Procon.Core can be passed through as parameters.

Failing the exact parameter matching, a parameter can be a string with a requirement to be converted to another primitive type.

```C#
public class ExampleController : CoreController() {
    public ExampleController() : CoreController() {
        this.CommandDispatchers.AddRange(new List<ICommandDispatch>() {
            new CommandDispatch() {
                Name = "ExampleCommand",
                ParameterTypes = new List<CommandParameterType>() {
                    new CommandParameterType() {
                        Name = "arbitraryParameterName1",
                        Type = typeof(String)
                    },
                    new CommandParameterType() {
                        Name = "convertedParameter",
                        Type = typeof(int)
                    }
                },
                Handler = this.ExampleCommandHandler
            }
        }
    }

    public ICommandResult ExampleCommandHandler(
        ICommand command, Dictionary<String, ICommandParameter> parameters) {

        String arbitraryParameterName1 = parameters["arbitraryParameterName1"].First<String>();
        int convertedParameter = parameters["convertedParameter"].First<int>();
    }
}
```

#### References

- [Procon.Core.Shared.CommandParameterType](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/CommandParameterType.cs)
- [Procon.Core.Shared.CoreController](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/CoreController.cs)
- [Procon.Core.Shared.ICommandDispatch](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/ICommandDispatch.cs)
- [Procon.Core.Shared.CommandDispatch](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/CommandDispatch.cs)
- [Procon.Core.Shared.ICommandParameter](https://github.com/Myrcon/Procon-2/blob/master/src/Procon.Core.Shared/ICommandParameter.cs)
