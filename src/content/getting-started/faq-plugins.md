## Plugins

> Could I get functionality “X” or library “Y” added to the plugin API?

Plugins are independent projects and no longer compiled by the runtime like Procon Frostbite was. This allows for plugins to add dependencies on any other assemblies they require. Natively the plugin AppDomain only knows the assemblies included in the package Myrcon.Potato.Shared, and that will always be the case.

> How are database connections handled for plugins?

Procon includes some very basic query building support that works with MySQL, SQLite and MongoDb. It's not designed to cover & do everything, but more designed to work with Procon's commands architecture and be database agnostic.

It allows for plugins to store basic information in a database, but does not allow for relational functionality. It's designed to allow for easy, persistent storage of data by a plugin which can potentially be accessed by other plugins.

There is also support for migrations which can help a plugin developer maintain a table structure over multiple releases of their plugin.

> Can plugins access the disk / use custom files?

Plugins have read access to all package directories, read & write access to the logs folder and read & write access to a config directory.

Any localization files included in their package will be consumed by Procon and made available to all plugins.

> Can plugins perform web requests or use network connections?

No, the sandbox is a lot more strict in Procon than it was in Procon Frostbite. The sandbox allows for code execution and disk access with varying level of permissions to some directories.

While limiting from the idea of Procon Frostbite, this actually allows for a protocol to be implemented (that will for instance connect to a Teamspeak 3 server) which can then be shared over all plugins. This will also function similarly for access to battlelog's API, just so Procon makes it easier for plugins to share information/load/connections.

The user would add a protocol connection for their Teamspeak 3 server or Battlelog, then plugins would just issue commands to that connection for any data they require.

> Can plugins interact or access other plugins?

Yes, Procon is built on commands. A command optionally has a permission attached to it. This allows plugins to just issue a command and see what they get back.

It's possible to specify a scope of the command, if you want it to go to a specific plugin or connection for instance.

> Can plugins interact with Procon's Peeler / create own Peeler elements?

At least Myrcon's implementation of the Peeler will allow plugins to essentially run like webpages. There is no default settings page or other limiting factor. Plugins are just given an empty canvas to run with.

I would imagine in the future there could be some nuget packages released that would include a boilerplate Peeler for plugins, but at least we start from scratch and know that a plugin can make a Peeler however they wish.

> How do I install a plugin?

Find out your plugin developers private nuget feed, add it to Procon and you'll be able to install/update/uninstall plugins with with a click of a button.

> Do I have to restart Procon after installing / loading a new plugin?

Procon itself spawns an instance that will shutdown, install/uninstall/update the plugin package then start the instance back up again. The user should be able to perform installs/uninstalls/updates with a click of the mouse.

> Can one plugin handle multiple games or do I have to create separate releases?

Procon from the ground up strives for protocol agnostic interface for plugins to interact with. A plugin itself should not need to know the underlying protocol to function at all.

If a plugin does require functionality of a protocol, then it really should be included in the protocol so all plugins can then benefit.

Plugins do get access to packets being sent and received, but it should be stressed that a plugin should use the commands/actions API so their plugins just seemingly work on all protocols that support the given actions.

> Is Procon backwards compatible with Procon 1 plugins?

No. While it could be possible to write a plugin to use Procon Frostbite plugins, there is several years of intermittent work, development and thinking involved in this new plugin architecture. It would be far better for a plugin to be rewritten than made to work in its existing form.

> Do I need to have Procon running somewhere for plugins to work?

Yes, you need the software running for the software to function in any capacity. You can get this hosted, which will therefore be running somewhere.

> Do I have to make my plugin open source / compliant with some sort of license?

No, plugins and protocols can be closed source though we'll probably only allow advertisement on our forums if they are open source. This may change though and we demand open source, but not specifying a license for the plugins usage (e.g, if you want to charge for usage/downloads/updates).

> Does Procon run plugins in some sort of sandbox (is their execution somehow restricted)?

Plugins run in a sandbox with minimal permissions. These permissions cannot be altered.

The plugins have access to a logs folder, a config folder and read access to all package directories.

> Where can I find examples of plugin development?

The main solution of Procon contains examples and unit tests for these examples. Simply clone the project at https://github.com/Myrcon/Procon-2-Potato and open up the solution.

You should see examples in the "Examples" solution directory. There are corresponding unit tests for each example, though most of the tests are designed to help you step through working examples quickly.

The examples are included in the main solution so we can ensure each outgoing release has working examples and so plugin developers have to download the entire source of Potato. You might be able to help us :)'

> How do I publish my plugin?

1. Create your plugin
2. See http://docs.nuget.org/docs/creating-packages/creating-and-publishing-a-package
3. Include "Procon" as a tag in your package. Only packages tagged with "Procon" will appear in the Peeler.

Myrcon does not host your packages. There are numerous nuget repository hosts.

Myrcon *may* be interested in sponsoring nuget hosting, but we need to make it clear that sponsorship does not convey responsibility.

> How do I create a plugin?

Instructions are pretty similar to those found at http://docs.nuget.org/docs/creating-packages/hosting-your-own-nuget-feeds

1. Install NuGet
http://docs.nuget.org/docs/start-here/installing-nuget

2. Create a new Class Library project
For Procon to pickup the plugin you are required to follow the naming convention "[Owners].Plugins.[PluginName]" like
-- "Myrcon.Plugins.Autobalancer"
-- "PapaCharlie.Plugins.Autobalancer.Balancer"
-- "PapaCharlie.Plugins.Autobalancer.Scrambler"

3. Add https://repo.myrcon.com/procon to your NuGet repositories

4. Include NuGet package "Myrcon.Potato.Shared" from the myrcon repository

5. Create a source file "Program.cs". Procon will look for the type "[PackageId].Package" to load.

```
using System;
using Potato.Core.Shared.Events;
using Potato.Core.Shared.Plugins;

namespace /* Your Package ID as the Namespace */ {
    public class Program : PluginController {

        public override void GenericEvent(GenericEventArgs e) {
            base.GenericEvent(e);

            if (e.GenericEventType == GenericEventType.PluginsPluginEnabled) {
                Console.WriteLine("Hello World!");
            }
        }
    }
}

```

6. Done, next you'll want to look at publishing your plugin as a NuGet package.
