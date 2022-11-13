


        const Discord = module.require("discord.js");

        module.exports.run = async (client, message, args, hex) => {
           const mapping = {
                    " ": " ",
                    "0": ":zero:",
                    "1": ":one:",
                    "2": ":two:",
                    "3": ":three:",
                    "4": ":four:",
                    "5": ":five:",
                    "6": ":six:",
                    "7": ":seven:",
                    "8": ":eight:",
                    "9": ":nine:",
                    "!": ":grey_exclamation:",
                    "?": ":grey_question:",
                    "#": ":hash:",
                    "*": ":asterisk:"
                };
        
                "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
                    mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
                });
        
                if (args.length < 1){
                    message.channel.send("`Enter text to Emojify!`").then(message => message.delete(3000));
                }
                
                message.delete();
                let emoj = args.join(" ")
                    .split("")
                    .map(c => mapping[c] || c)
                    .join("")
                    if (emoj.length > 1999) return message.channel.send("❌ | Message too big, try using less characters")
                message.channel.send(
                   emoj
                );
        }
        
        module.exports.help = {
         name: "ping",
          description: "Gets a ping",
          usage: "ping"
        };