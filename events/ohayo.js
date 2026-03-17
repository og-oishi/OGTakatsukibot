const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message){
		if(message.author.bot) return;
		if(message.content.startsWith('おはよ')){
			message.channel.send('おはようございます');
		}
	}
};

/*
//MessageCreateEvent処理(サーバーにメッセージが送信された時の処理)
client.on(Events.MessageCreate, async message => { //messageに作られたmessageとかいろいろ入る
    if (message.author.bot) {//メッセージの送信者がBOTなら
        return;//returnしてこの先の処理をさせない。
    }
    if (message.content.startsWith("おはよ")) { //message.content(メッセージの内容)が「おはよ」で始まっていたら
        await message.channel.send("おはよ"); //botがmessage.channel(メッセージが送信されたチャンネル)に「おはよ」と送信する
    }
});
*/