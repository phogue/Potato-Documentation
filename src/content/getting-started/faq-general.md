## General

> Which version of the .NET framework will Procon be compiled with / using?

.NET 4.0. This may be increased over time, but the only restriction is my development tools.

> Can I host Procon myself instead of renting it?

Yes, we have a setup program included with Procon. This just helps you create a self signed certificate to accept commands, setup the base language for Procon to use as well as an administrator/streaming account. When those are setup you'll then get a command line to execute Procon with.

Procon should then execute and accept commands from a UI or other service.

> Can the sandbox for plugins be disabled or altered by the user?

No. Not at all.

Don't yell at me, it's for your own good.

We had this option available in Procon Frostbite and it's the worst option to turn off - but it makes everything easy, so people frequently turned it off. It's akin to turning off your firewall, using a public wifi and not using secure connections then being surprised that something bad happened.

It's the only defence we can implement to keep you safe from mischievous plugins and protocols. Procon does not have the option to disable the sandbox as we've found that given the option, people disable the sandbox. It was originally implemented so plugin developers could easily test functionality without explicitly allowing certain features of the sandbox.

Four years have told us that some hosts will just setup an instance, disable the sandbox and allow users to upload any code they want to their procon install. All this and we keep saying you shouldn't ever disable the sandbox. Crazy huh?