const Discord = require("discord.js");

const Client= new Discord.Client ({partials:["MESSAGE","CHANNEL","REACTION"]});

const Préfix= "!";
const guild='784446875250982972';

const fs = require('fs');



const zeroEmoji='0️⃣';
const unEmoji='1️⃣';
const deuxEmoji='2️⃣';
const troisEmoji='3️⃣';
const quatreEmoji='4️⃣';
const cinquEmoji ='5️⃣';
const sixEmoji ='6️⃣';
const septEmoji='7️⃣';
const huitEmoji='8️⃣';
const neufEmoji='9️⃣';
const dixEmoji ='🔟';
const rougeEmoji='🔴';
const orangeEmoji='🟠';
const vertEmoji ='🟢';
const bleuEmoji ='🔵';
const violetEmoji ='🟣';
const marronEmoji='🟤';
const noirEmoji='⚫';
const blancEmoji='⚪';

const sencodeRoles ='785202284527091763';
const dallemandRoles ='800315446011232287';
const ditalienRoles ='800315745342717992';
const despagolRoles ='800315525330763797';
const darabeRoles ='800315590907658241';
const desabacRoles ='800315643291107328';
const dlatinRoles ='800315692875513896';
const premiergRoles='785206540533366794';
const parabeRoles= '800317289274146826';
const pallemandRoles ='800317077860777985';
const pespagonolRoles = '800317122802221076';
const platinRoles ='800317328013131796';
const pesabacRoles ='800317248492535858';
const pitalienRoles ='800317197422690314';
const pmathRoles='785207159750131723';
const plitespRoles ='800132488918859807';
const psvtRoles ='800130606737784922';
const pgeopoRoles ='800131210135339028';
const psesRoles='800131150608597012';
const pphyRoles ='785207470129545286';
const paglmodernRoles ='800132228767416411';
const plitaglRoles= '800130674111283230';
const phumaRoles = '800132595114704946';
const pstmgRoles = '785206659869966357';
const tgénéraleRoles='785207017521283074';
const tsesRoles= '800131067658371133';
const thumaRoles='800058002543214614';
const tphyRoles = '785222785609760829';
const tlitaglRoles ='785544746361159710';
const tmathRoles= '784470724911038464';
const tsvt ='785207639628840960'
const taglmodernRoles = '800131345552244777';
const tgeopoRoles='785207373597376592';
const tlitespRoles='800058721354776607';
const tstmgRoles='785207126897328128';
const mathexpRoles='784471726783463464';
const mathcompRoles='800315371865112596';
const tesabacRoles='800061571522625566';
const talmRoles ='800061620930871326';
const tespRoles ='800117261524008990';
const tlatinRoles ='800119322873823232';
const titlRoles ='800316493375995915';
const tarabeRoles ='800140436030750740';
const btsciuRoles ='787015854612414474';
const btscidRoles ='787015999639388170';
const btsmucuRoles ='800317072026107905';
const btsmucdRoles ='802310551841538089';



Client.commands = new Discord.Collection();



    Client.commands.set(command.name, command);
};




Client.on ("ready",()=>{
    console.log("prêt à en découdre");
    
});



Client.on('guildMemberAdd',members =>{
 
    
    const Embed = new Discord.MessageEmbed()      
        
        .setColor('#e42643')
        .setTitle('bienvenue')    
        .setDescription("bienvenue sur le serveur discord du lycée Victor Hugo \n ce serveur est là pour faire de l'entraide entre tous les élèves de l'etablissement. \n\n pour facilité la reconaissance de chacun, nous allons te demander de bien vouloir renseigner ton niveaux, tes options, tes langues et enfin tes spécialitées (uniquement pour les élèves de première et terminales générales).\n\n Pour les renseigner il suffit de cliquer sur la réaction (petit émoji sous le message) adapté à ta situation dans les salons. \n les salons se suivent dans l'ordres suivant : \n\n- choix du niveau (pour choisir ta classe) \n-choix des options (si tu n'a pas d'option ne te rend pas dessus) \n -choix des langues \n -choix des spécialitées \n -merci de valider le réglement  "
        ); 
        
 members.guild.channels.cache.find(channel => channel.id==='784446875250982975').send(Embed);
    
});

Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE1'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('étape 1 choix du niveau')    
        .setDescription('choisis ton rôle en fonction de ton niveau dans le lycée :\n'
        +` ${zeroEmoji} si tu es en seconde,\n`
        +`${unEmoji} si tu es en première générale,\n`
        +`${deuxEmoji} si tu es en première stmg\n`
        +`${troisEmoji} si tu es en terminale générale\n`
        +`${quatreEmoji} si tu es en terminale stmg\n`
        +`${cinquEmoji} si tu es en BTS CI prmière année\n`
        +`${sixEmoji} si tu es en BTS CI deuièxme année\n`
        +`${septEmoji} si tu es en BTS MUC première année\n`
        +`${huitEmoji} si tu es en BTS MUC deuxième année\n`); 
         message.channel.send(Embed).then(embedMessage => {
            embedMessage.react(zeroEmoji);
            embedMessage.react(unEmoji);
            embedMessage.react(deuxEmoji);
            embedMessage.react(troisEmoji);
            embedMessage.react(quatreEmoji);
            embedMessage.react(cinquEmoji);
            embedMessage.react(sixEmoji);
            embedMessage.react(septEmoji);
            embedMessage.react(huitEmoji);
        }); 
            
            
        
         
        
    };

});

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    if(reaction.message.channel.id =='800321373822124032' ){
        if (reaction.emoji.name === zeroEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(sencodeRoles)
        }           
        else if (reaction.emoji.name === unEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(premiergRoles)
        }
        else if (reaction.emoji.name === deuxEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(pstmgRoles)
        }
        else if (reaction.emoji.name === troisEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(tgénéraleRoles)
        }
        else if (reaction.emoji.name === quatreEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(tstmgRoles)
        }
        else if (reaction.emoji.name === cinquEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(btsciuRoles)
        }
        else if (reaction.emoji.name === sixEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(btscidRoles)
        }
        else if (reaction.emoji.name === septEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(btsmucuRoles)
        }
        else if (reaction.emoji.name === huitEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(btsmucdRoles)
        };
    
    };
});

Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    if(reaction.message.channel.id =='800321373822124032' ){
        if (reaction.emoji.name === zeroEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(sencodeRoles)
        }           
        else if (reaction.emoji.name === unEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(premiergRoles)
        }
        else if (reaction.emoji.name === deuxEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(pstmgRoles)
        }
        else if (reaction.emoji.name === troisEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(tgénéraleRoles)
        }
        else if (reaction.emoji.name === quatreEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(tstmgRoles)
        }
        else if (reaction.emoji.name === cinquEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(btsciuRoles)
        }
        else if (reaction.emoji.name === sixEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(btscidRoles)
        }
        else if (reaction.emoji.name === septEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(btsmucuRoles)
        }
        else if (reaction.emoji.name === huitEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(btsmucdRoles)
        };
    
    };
});

Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE2S'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('étape 2 choix des options')    
        .setDescription('choisis ton rôle en fonction de tes options:\n'
        +`${marronEmoji} si tu fait du latin\n`
        +`${vertEmoji} si tu fait arabe\n`
        +`${blancEmoji} si tu fait esabac`);
        message.channel.send(Embed).then(embedMessage =>{
            embedMessage.react(marronEmoji);
            embedMessage.react(vertEmoji);
            embedMessage.react(blancEmoji);
        });

    };

});

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    if(reaction.message.channel.id =='800321598807736330' ){
        if (reaction.emoji.name === marronEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.add(dlatinRoles)
        }           
        else if (reaction.emoji.name === vertEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(darabeRoles)
        }
        else if (reaction.emoji.name === blancEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(desabacRoles)
        }      
    
    };
});

Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    if(reaction.message.channel.id =='800321598807736330' ){
        if (reaction.emoji.name === marronEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(dlatinRoles)
        }           
        else if (reaction.emoji.name === vertEmoji ){
                 await reaction.message.guild.members.cache.get(user.id).roles.remove(darabeRoles)
        }
        else if (reaction.emoji.name === blancEmoji ){
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(desabacRoles)
        }      
    
    };
});

Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE2P'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('étape 2 choix des options')    
        .setDescription('choisis ton rôle en fonction de tes options:\n'
        +`${marronEmoji} si tu fait du latin\n`
        +`${vertEmoji} si tu fait arabe\n`
        +`${blancEmoji} si tu fait esabac`);
        message.channel.send(Embed).then(embedMessage =>{
            embedMessage.react(marronEmoji);
            embedMessage.react(vertEmoji);
            embedMessage.react(blancEmoji);
        });
    };
});  

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800321730231926784' ){
    if (reaction.emoji.name ===marronEmoji ){
         await reaction.message.guild.members.cache.get(user.id).roles.add(platinRoles)
             }           
    else if (reaction.emoji.name === vertEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(parabeRoles)
    }
    else if (reaction.emoji.name === blancEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(pesabacRoles)
    }           
    };
});

Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800321730231926784' ){
        if (reaction.emoji.name === marronEmoji){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(platinRoles)
        }           
        else if (reaction.emoji.name === vertEmoji ){
                 await reaction.message.guild.members.cache.get(user.id).roles.remove(parabeRoles)
        }
        else if (reaction.emoji.name === blancEmoji ){
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(pesabacRoles)
        }      
    
    };
});
            

Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE2T'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('étape 2 choix des options')    
        .setDescription('choisis ton rôle en fonction de tes options:\n'
        +`${marronEmoji} si tu fait du latin\n`
        +`${vertEmoji} si tu fait arabe\n`
        +`${blancEmoji} si tu fait esabac\n`
        +`${noirEmoji} si tu fait math expertes\n`
        +`${rougeEmoji} si tu fait math complémentaire`
        );
        message.channel.send(Embed).then(embedMessage =>{
            embedMessage.react(marronEmoji);
            embedMessage.react(vertEmoji);
            embedMessage.react(blancEmoji);
            embedMessage.react(noirEmoji);
            embedMessage.react(rougeEmoji);
        });
    };
});  

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800321850668351498' ){
        if (reaction.emoji.name === marronEmoji){
              await reaction.message.guild.members.cache.get(user.id).roles.add(tlatinRoles)
        }           
        else if (reaction.emoji.name === vertEmoji ){
                 await reaction.message.guild.members.cache.get(user.id).roles.add(tarabeRoles)
        }
        else if (reaction.emoji.name === blancEmoji ){
                  await reaction.message.guild.members.cache.get(user.id).roles.add(tesabacRoles)
        } 
        else if (reaction.emoji.name === noirEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(mathexpRoles)
        }  
        else if (reaction.emoji.name === rougeEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.add(mathexpRoles)
        }   
    
    };
});

Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800321850668351498' ){
        if (reaction.emoji.name === marronEmoji){
              await reaction.message.guild.members.cache.get(user.id).roles.remove(tlatinRoles)
        }           
        else if (reaction.emoji.name === vertEmoji ){
                 await reaction.message.guild.members.cache.get(user.id).roles.remove(tarabeRoles)
        }
        else if (reaction.emoji.name === blancEmoji ){
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(tesabacRoles)
        } 
        else if (reaction.emoji.name === noirEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(mathexpRoles)
        }  
        else if (reaction.emoji.name === rougeEmoji ){
            await reaction.message.guild.members.cache.get(user.id).roles.remove(mathcompRoles)
        }   
    
    };
        
        
                      
            
});
 
Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE3S'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('étapes 3 choix des langues')    
        .setDescription("choisis ton rôle en fonction de tes langues (l'anglais est automatiquement assigné dans la catégorie de votre niveau) :\n"
        +` ${orangeEmoji} si tu fait de l'allemand \n`
        +`${rougeEmoji} si tu fait de l'espagnol \n`
        +`${bleuEmoji} si tu fait de l'italien`
        ); 
         message.channel.send(Embed).then(embedMessage => {
            embedMessage.react(orangeEmoji);
            embedMessage.react(rougeEmoji);
            embedMessage.react(bleuEmoji);
        }); 
    };
});

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800321930112008223' ){
    if (reaction.emoji.name === orangeEmoji ){
         await reaction.message.guild.members.cache.get(user.id).roles.add(dallemandRoles)
             }           
    else if (reaction.emoji.name === rougeEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(despagolRoles)
    }
    else if (reaction.emoji.name === bleuEmoji ){
             await reaction.message.guild.members.cache.get(user.id).roles.add(ditalienRoles)
    }
    
                
    };
});
    
Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800321930112008223' ){
    if (reaction.emoji.name === orangeEmoji){
         await reaction.message.guild.members.cache.get(user.id).roles.remove(dallemandRoles)
                }           
    else if (reaction.emoji.name === rougeEmoji){
             await reaction.message.guild.members.cache.get(user.id).roles.remove(despagolRoles)}
         
    else if (reaction.emoji.name === bleuEmoji){
             await reaction.message.guild.members.cache.get(user.id).roles.remove(ditalienRoles)}
            };
});
Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE3P'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('étapes 3 choix des langues')    
        .setDescription("choisi ton rôles en fonction de tes langues (l'anglais est automatiquement assigné dans la catégorie de votre niveau) :\n"
        +` ${orangeEmoji} si tu fait de l'allemand \n`
        +`${rougeEmoji} si tu fait de l'espagnol \n`
        +`${bleuEmoji} si tu fait de l'italien`
        ); 
         message.channel.send(Embed).then(embedMessage => {
            embedMessage.react(orangeEmoji);
            embedMessage.react(rougeEmoji);
            embedMessage.react(bleuEmoji);
        }); 
    };
});

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800322118973521930' ){
    if (reaction.emoji.name === orangeEmoji ){
         await reaction.message.guild.members.cache.get(user.id).roles.add(pallemandRoles)
             }           
    else if (reaction.emoji.name === rougeEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(pespagonolRoles)
    }
    else if (reaction.emoji.name === bleuEmoji ){
             await reaction.message.guild.members.cache.get(user.id).roles.add(pitalienRoles)
    }
    
                
    };
});
    
Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800322118973521930' ){
    if (reaction.emoji.name === orangeEmoji){
         await reaction.message.guild.members.cache.get(user.id).roles.remove(pallemandRoles)
                }           
    else if (reaction.emoji.name === rougeEmoji){
             await reaction.message.guild.members.cache.get(user.id).roles.remove(pespagonolRoles)}
         
    else if (reaction.emoji.name === bleuEmoji){
             await reaction.message.guild.members.cache.get(user.id).roles.remove(pitalienRoles)}
            };
});
Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE3T'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('étapes 3 choix des langues')    
        .setDescription("choisis ton rôle en fonction de tes langues (l'anglais est automatiquement assigné dans la catégorie de votre niveau) :\n"
        +` ${orangeEmoji} si tu fait de l'allemand \n`
        +`${rougeEmoji} si tu fait de l'espagnol \n`
        +`${bleuEmoji} si tu fait de l'italien\n`
    
        ); 
         message.channel.send(Embed).then(embedMessage => {
            embedMessage.react(orangeEmoji);
            embedMessage.react(rougeEmoji);
            embedMessage.react(bleuEmoji);
        }); 
    };
});

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800322246613663764' ){
    if (reaction.emoji.name === orangeEmoji ){
         await reaction.message.guild.members.cache.get(user.id).roles.add(talmRoles)
             }           
    else if (reaction.emoji.name === rougeEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(tespRoles)
    }
    else if (reaction.emoji.name === bleuEmoji ){
             await reaction.message.guild.members.cache.get(user.id).roles.add(titlRoles)
    }
    
                
    };
});
    
Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800322246613663764' ){
    if (reaction.emoji.name === orangeEmoji){
         await reaction.message.guild.members.cache.get(user.id).roles.remove(talmRoles)
                }           
    else if (reaction.emoji.name === rougeEmoji){
             await reaction.message.guild.members.cache.get(user.id).roles.remove(tespRoles)}
         
    else if (reaction.emoji.name === bleuEmoji){
             await reaction.message.guild.members.cache.get(user.id).roles.remove(titlRoles)}
            };
});

Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE4P'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('choix des spécialitées')    
        .setDescription('choisi tes spécialitées:\n'
        +` ${unEmoji} pour la spé littérature espagnole  \n`
        +`${deuxEmoji} pour la spé SVT \n`
        +`${troisEmoji} pour la spé géo-po \n`
        +`${quatreEmoji} pour la spé ses \n`
        +`${cinquEmoji} pour spé physique \n`
        +`${sixEmoji} pour la spé anglais du monde contemporain \n`
        +`${septEmoji} pour la spé littérature anglaise \n`
        +`${huitEmoji} pour la spé humanité et litérature \n`
        +`${neufEmoji} pour la spé math \n`        
        ); 
         message.channel.send(Embed).then(embedMessage => {
            embedMessage.react(unEmoji);
            embedMessage.react(deuxEmoji);
            embedMessage.react(troisEmoji);
            embedMessage.react(quatreEmoji);
            embedMessage.react(cinquEmoji);
            embedMessage.react(sixEmoji);
            embedMessage.react(septEmoji);
            embedMessage.react(huitEmoji);
            embedMessage.react(neufEmoji);
        }); 
    };
});

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800322555419557928' ){
    if (reaction.emoji.name === unEmoji ){
         await reaction.message.guild.members.cache.get(user.id).roles.add(plitespRoles)
             }           
    else if (reaction.emoji.name === deuxEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(psvtRoles)
    }
    else if (reaction.emoji.name === troisEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(pgeopoRoles)
    }
    else if (reaction.emoji.name === quatreEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(psesRoles)
    }
    else if (reaction.emoji.name === cinquEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(pphyRoles)
    }
    else if (reaction.emoji.name === sixEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(paglmodernRoles)
    }
    else if (reaction.emoji.name === septEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(plitaglRoles)
    }
    else if (reaction.emoji.name === huitEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(phumaRoles)
    }
    else if (reaction.emoji.name === neufEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(pmathRoles)
    }            
    };
});
    
Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800322555419557928' ){
    if (reaction.emoji.name === unEmoji){
         await reaction.message.guild.members.cache.get(user.id).roles.remove(plitespRoles)
                }           
    else if (reaction.emoji.name ===deuxEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(psvtRoles)
         }
    else if (reaction.emoji.name ===troisEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(pgeopoRoles)
         }
    else if (reaction.emoji.name ===quatreEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(psesRoles)
         }
    else if (reaction.emoji.name ===cinquEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(pphyRoles)
         }
    else if (reaction.emoji.name ===sixEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(paglmodernRoles)
         }
    else if (reaction.emoji.name ===septEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(plitaglRoles)
         }
    else if (reaction.emoji.name ===huitEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(phumaRoles)
         }
    else if (reaction.emoji.name ===neufEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(pmathRoles)
         }          
    };
});

Client.on('message',message =>{
    if (message.author.bot)return;
    if (message.content ==='!rolesE4T'){
        const Embed = new Discord.MessageEmbed()
        

        
        .setColor('#e42643')
        .setTitle('choix des spécialitées')    
        .setDescription('choisi tes spécialitées:\n'
        +` ${unEmoji} pour la spé littérature espagnole  \n`
        +`${deuxEmoji} pour la spé SVT \n`
        +`${troisEmoji} pour la spé géo-po \n`
        +`${quatreEmoji} pour la spé ses \n`
        +`${cinquEmoji} pour spé physique \n`
        +`${sixEmoji} pour la spé anglais du monde contemporain \n`
        +`${septEmoji} pour la spé littérature anglaise \n`
        +`${huitEmoji} pour la spé humanité et litérature \n`
        +`${neufEmoji} pour la spé math \n`        
        ); 
         message.channel.send(Embed).then(embedMessage => {
            embedMessage.react(unEmoji);
            embedMessage.react(deuxEmoji);
            embedMessage.react(troisEmoji);
            embedMessage.react(quatreEmoji);
            embedMessage.react(cinquEmoji);
            embedMessage.react(sixEmoji);
            embedMessage.react(septEmoji);
            embedMessage.react(huitEmoji);
            embedMessage.react(neufEmoji);
        }); 
    };
});

Client.on('messageReactionAdd',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800462295775182948' ){
    if (reaction.emoji.name === unEmoji ){
         await reaction.message.guild.members.cache.get(user.id).roles.add(tlitespRoles)
             }           
    else if (reaction.emoji.name === deuxEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(tsvt)
    }
    else if (reaction.emoji.name === troisEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(tgeopoRoles)
    }
    else if (reaction.emoji.name === quatreEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(tsesRoles)
    }
    else if (reaction.emoji.name === cinquEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(tphyRoles)
    }
    else if (reaction.emoji.name === sixEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(taglmodernRoles)
    }
    else if (reaction.emoji.name === septEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(tlitaglRoles)
    }
    else if (reaction.emoji.name === huitEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(thumaRoles)
    }
    else if (reaction.emoji.name === neufEmoji ){
        await reaction.message.guild.members.cache.get(user.id).roles.add(tmathRoles)
    }            
    };
});
    
Client.on('messageReactionRemove',async(reaction,user)=>{
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
        
    if(reaction.message.channel.id =='800462295775182948' ){
    if (reaction.emoji.name === unEmoji){
         await reaction.message.guild.members.cache.get(user.id).roles.remove(tlitespRoles)
                }           
    else if (reaction.emoji.name ===deuxEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(tsvt)
         }
    else if (reaction.emoji.name ===troisEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(tgeopoRoles)
         }
    else if (reaction.emoji.name ===quatreEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(tsesRoles)
         }
    else if (reaction.emoji.name ===cinquEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(tphyRoles)
         }
    else if (reaction.emoji.name ===sixEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(taglmodernRoles)
         }
    else if (reaction.emoji.name ===septEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(tlitaglRoles)
         }
    else if (reaction.emoji.name ===huitEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(thumaRoles)
         }
    else if (reaction.emoji.name ===neufEmoji){
        await reaction.message.guild.members.cache.get(user.id).roles.remove(tmathRoles)
         }          
    };
});

Client.on('message',message=>{
    if(message.content=== 'bonjour'){
        message.guild.send("bonjour");
    }
});



Client.login(process.env.BOT_TOKEN);
