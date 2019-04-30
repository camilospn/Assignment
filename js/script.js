'use strict';

/* global Monogatari, monogatari */

const { $_ } = Monogatari;
// Define the messages used in the game.
// Define the messages used in the game.
monogatari.action ('Message').messages ({
	'Credits':{
		'Title': 'Awesome people!',
		'Subtitle': 'Thanks to everyone.',
		'Message': `
			Music From:
			<div xmlns:cc='http://creativecommons.org/ns#' about='urn:sha1:IJ6UMFRNC6G7KCRWZJWZYCPR5Y2XIXCG'>
				<a rel='cc:attributionURL' property='cc:attributionName' href='http://ccmixter.org/files/_ghost/25389'  target='_blank'> _ghost</a> /
				<a rel='license' href='http://creativecommons.org/licenses/by/3.0/'  target='_blank'>CC BY 3.0</a>
			</div>
			<p>Evelyn Sprite from: <a href='http://miririri.deviantart.com/art/Evelyn-Sprite-Set-Starter-Pack-free-minipack-347585657'  target='_blank'>miririri</a></p>
			<p>Backgrounds from the one and only, <a href='https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=17302' target='_blank'>Uncle Mugen</a>!</p>`
	}
});

// Define the notifications used in the game
monogatari.action ('Notify').notifications ({
	'End': {
		title: 'Things just got real!',
		body: 'You finished the story.',
		icon: 'img/icon_192x192.png'
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('Particles').particles ({
	'universe': {'particles':{'number':{'value':0,'density':{'enable':true,'value_area':800}},'color':{'value':'#ffffff'},'shape':{'type':'circle','stroke':{'width':0,'color':'#000000'},'polygon':{'nb_sides':5},'image':{'src':'img/github.svg','width':100,'height':100}},'opacity':{'value':0.5,'random':true,'anim':{'enable':false,'speed':1,'opacity_min':0.1,'sync':false}},'size':{'value':3,'random':true,'anim':{'enable':false,'speed':40,'size_min':0.1,'sync':false}},'line_linked':{'enable':false,'distance':150,'color':'#ffffff','opacity':0.4,'width':1},'move':{'enable':true,'speed':6,'direction':'none','random':false,'straight':false,'out_mode':'out','bounce':false,'attract':{'enable':false,'rotateX':600,'rotateY':1200}}},'interactivity':{'detect_on':'canvas','events':{'onhover':{'enable':false,'mode':'repulse'},'onclick':{'enable':true,'mode':'push'},'resize':true},'modes':{'grab':{'distance':400,'line_linked':{'opacity':1}},'bubble':{'distance':400,'size':40,'duration':2,'opacity':8,'speed':3},'repulse':{'distance':200,'duration':0.4},'push':{'particles_nb':4},'remove':{'particles_nb':2}}},'retina_detect':true}
});

// Define the music used in the game.
monogatari.assets ('music', {
	'Theme': '_ghost_-_Reverie_(small_theme).mp3'
});

// Define the videos used in the game.
monogatari.assets ('video', {
	'Dandelion': 'v1.mp4',
	'Dandelion2': 'v2.mp4',
	'Dandelion3': 'v3.mp4',
	'Dandelion4': 'v4.mp4',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'Main': 'monogatari-promo.svg',
	'Classroom': 'classroom.jpg',
	'Home': 'home.png',
	'Room': 'room.jpg',
	'Sea': 'sea.jpg',
	'Library': 'library.png',
	'Street': 'street.jpg',
	'Forest': 'street2.jpg',
	'Street3': 'street3.jpg',
	'Street4': 'street4.jpg',
	'Street5': 'street5.jpg',
	'Street6': 'street6.jpg',
	'Street7': 'street7.jpg',
	'Office': 'office.jpg',
	'Office2': 'office2.jpg',
});

// Define the Characters
monogatari.characters ({
	'p': {
		'Name': '{{player.name}}',
		'Color': '#ff3951'
	},
	'f': {
		'Name': 'N. Osborn',
		'Color': '#f9812a'
	},
	'e':{
		'Name': 'Spiderman',
		'Color': '#00bfff',
		'Directory': 'Spidey',
		'Images':{
			'Normal': 'normal.png',
			'Mad': 'exp1.png',
			'Doubt': 'doubt.png',
			'Good': 'good.png',
			'Sir':'sir.png',
			'Think1': 'think1.png',
			'Think2': 'think2.png',
			'Dog1': 'dog1.png',
			'Dog2': 'dog2.png',
			'Dog3': 'dog3.png',
			'Dog4': 'dog4.png',
			'Huge': 'huge.png',
		}
	},
	'answers':{
		'Name': 'Answers',
		'Color': '#00bfff',
		'Directory': 'Answers',
		'Images':{
			'Normal': 'flower.jpg',
			'1b': '1b.jpg',
			'1c': '1c.jpg',
			'1d':'1d.jpg',
			'1e': '1e.jpg',
			'2a':'2.jpg',
			'3a':'3.jpg',
			'4a':'4a.jpg',
			'4b':'4b.jpg',
			'5a':'5a.jpg',
			'5b':'5b.jpg',
			'5c':'5c.jpg',
			'6a':'6a.jpg',
			'6b':'6b.jpg',
			'6c':'6c.jpg',
			'6d':'6d.jpg',
		}
	}
});

monogatari.script ({
	// The game starts here.
	'English':{
		'Start':[
			{'Conditional': {
				'Condition': function () {
					return Storage.get ('played').then ((played) => {
						return  played == 'true';
					});
				},
				'True': {'Choice':{
					'Text': 'It seems you have already played the demo, do you wish to skip the introduction?',
					'Skip':{
						'Text': 'Skip',
						'Do': 'jump Introduction'
					},
					'Continue':{
						'Text': 'Continue',
						'Do': 'jump Introduction'
					}
				}},
				'False': 'jump Introduction'
			}}
		],

		'Introduction': [
			'clear',
			'scene black with fadeIn',
			
			'centered First of all, you may click the window or use the right arrow to advance!',
			'centered You can go back using the left arrow within the same scene!',
			'centered This is the Take-Home Assignment for the Sr. Product Manager Position at Rappi by J Camilo Espitia',
			'centered No copyright infringement intended.',
			'centered Let’s begin!',
			
			{'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.Storage.set ('PlayerName', input);
					this.storage ({ player: {name: input} });
					return true;
				},
				'Warning': 'You must enter a name!'
			}},
			'centered ...',
			
			{'Function': {
				'Apply': function () {
					this.action ('Particles').particles ('universe').particles.number.value = 10;
					return true;
				},
				'Reverse': function () {
					this.action ('Particles').particles ('universe').particles.number.value = 0;
					return true;
				},
			}},
			'particles universe',
			'centered You know?...',
			'centered You said be geeky, right?',
			'particles universe',
			'centered Remember? Cause I do remember!',
			'centered So here we go!',
			'stop particles',
			'stop particles',
			

			//Aqui inicia
			'play music Theme',
			'scene Street',
			
			'show e Dog1 center with fadeIn',
			'e Oh God! This looks so tasty!',
			
			'show e Dog2 center with fadeIn',
			'e You deserve it Friendly Neighborhood Spiderman!',
			'show e Dog3 center with fadeIn',
			
			'e Wait!',
			'e Why are you staring at me like a psycho?',
			'show e Dog4 center with fadeIn',
			'e I know you! You’re {{player.name}}!',
			
			'p What?',
			'e I’m sorry pal, but right now I’m in the middle of my lunch!',
			
			'p Man! What are you eating?',
			'p C’mon Spiderman!',
			
			'show e Mad center with fadeIn',
			'e Excuse me? It’s a Hot Dog!',			
			'e A very tasty Hot Dog!',		
			
			'p Where did you get it?',
			'show e Good center with fadeIn',
			'e From RAPPI! Best app ever!',
			'show e Normal center with fadeIn',
			'e You know, I was unsure about ordering food online...',
			'e But, My boss Nick Fury has pretty high standards, he gave this fast food restaurant 5 stars!',
			'show e Huge center with fadeIn',
			'e FIVE STARS!',
			'show e Normal center with fadeIn',
			'e So I said... Friendly neighborhood Spiderman, you deserve it.',
			'e And here we are.',
			
			'e C’mon wanna know more about this genius reviews?',			
			'e Let’s go!',
			
			//cambio de escena
			'clear',
			'scene black with fadeIn',
			'particles universe',
			'centered Fasten your seatbelts!',
			'centered We’re traveling down memory lane...',
			'stop particles',
			
			
			//cambio de escena Oscorp
			'clear',
			'scene Office2',
			'p ...',
			'clear',
			'scene Office',
			'show e Sir center with fadeIn',
			'e Hello Mr. Osborn! Did you call the most powerful superhero to help you?',
			'show e Doubt center with fadeIn',
			'f No time for jokes Spiderman.',
			'show e Normal center with fadeIn',
			'f My last research was stolen.',
			'f It contains the new features of RAPPI.',
			'show e Huge center with fadeIn',
			'e I love RAPPI! I can’t let them get away!',
			'show e Normal center with fadeIn',
			'f I need you to take back the six parts of the analysis.',
			'show e Huge center with fadeIn',
			'e SIX PARTS! That’s a lot of work!',
			'show e Normal center with fadeIn',
			'f Yes, it is Spiderman.',
			'show e Think1 center with fadeIn',
			'f Your mission is to recover...',
			'f 1. The evaluation of the idea.',
			'f 2. The hypotheses.',
			'f 3. The Survey results.',
			'f 4. The analysis of the content that inspires people to buy.',
			'f 5. The mock-up.',
			'f 6. The implementation plans and methodology.',
			
			'show e Sir center with fadeIn',
			'e Alright, alright Mr. Osborn. Your friendly neighborhood Spiderman is in charge!',
			
			//Spidey derrota al primero y obtiene los papeles.
			'clear',
			'scene Forest',
			'play video Dandelion2',
			'e Here we go! Hand over the first part!',
			
			'show e Good center with fadeIn',
			'e Easy peasy! Nobody is strong enough to beat the mighty Spiderman.',
			'show e Think1 center with fadeIn',
			'e Let’s check this papers out...',
			
			'p You should not do that... You’re a hero.',
			'show e Doubt center with fadeIn',
			'e Excuse me?',
			'e Shhh! Hear me out!',				
			'show e Think1 center with fadeIn',
			'e Mr. Osborn asked his best senior project manager if the new features were a good or bad idea.',
			'e Mr. Osborn wanted to add social features and/or user-generated restaurant reviews to RAPPI.',
			'e Here’s his reply:',
			'hide e with fadeOut',
			'show answers Normal top with fadeIn',
			'e Mr. Osborn should make the decision based on metrics and 3 criteria.',			
			'show answers 1c top with fadeIn',
			'e Using Google’s HEART Framework...',
			'e We can see that the new features help.',
			'e They can provide satisfaction metrics...',
			'e They can increase the average time spent by users in the app...',
			'e They can help new users to buy without fear...',
			'e Sounds good already!',
			'show answers 1d top with fadeIn',
			'e The UX metrics show that people want it too!',
			'show answers 1e top with fadeIn',
			'e And... there’s a positive impact in the business...',
			'e According to the analysis they will sell more.',
			'hide answers with fadeOut',
			'clear',
			
			'show e Think2 center with fadeIn',
			'e So the verdict is...',
			'e Of course it is a good idea!',
			'show e Huge center with fadeIn',
			'e Can’t wait to see the rest!',			
			
			//Spidey derrota al segundo
			'clear',
			'scene Street3',
			
			'show e Mad center with fadeIn',
			'e Ta da da. Another one bites the dust! Oh yeah!',
			'e And you’re too late! I already took it down.',
			
			'show e Think2 center with fadeIn',
			'e The second part of the investigation reveals the hypotheses.',
			'e The hypotheses are based on the main challenges of online food delivery.',
			
			'show e Doubt center with fadeIn',
			'p Let me see!',
			'hide e with fadeOut',
			
			'show answers 2a top with fadeIn',
			'e ...',	
			'hide answers with fadeOut',
			'clear',
			
			'show e Think1 center with fadeIn',
			'e This is interesting.',
			'show e Think2 center with fadeIn',
			'e Yeah, people like me are concerned!',
			'show e Mad center with fadeIn',
			'e What if the most beautiful super hero gets poisoned? No! No! No!',
			'show e Normal center with fadeIn',
			'e Mr. Osborn said he validated our fears around ordering food online in the next part.',
			'show e Huge center with fadeIn',
			'e I’m so thrilled!',
			'e I think I need to hit the toilet!',
			
			//Spidey derrota al Tercero
			'clear',
			'scene Street4',
			'play video Dandelion',
			'e It’s time to kick some robot ass!',
			
			'show e Mad center with fadeIn',
			'e Let’s get down to business, I really want to read this.',
			'e No time for jokes...',
			
			'show e Doubt center with fadeIn',
			'p Is it because you were beaten up?',
			
			'show e Mad center with fadeIn',
			'e Do you want me to kick your ass as well?',
			'p Pfff!',
			
			'show e Normal center with fadeIn',
			'e Ok, listen!',
			'show e Think2 center with fadeIn',
			'e The third part shows the results of the survey that the Product Manager did to 13 people to validate the hypotheses.',
						
			'p ...',			
			'show e Doubt center with fadeIn',
			'e ...yeah, what?',			
			
			'p Let me see!',
			'hide e with fadeOut',
			
			'show answers 3a top with fadeIn',
			'e ...',			
			'hide answers with fadeOut',
			'clear',
			
			'show e Think1 center with fadeIn',
			'e So people aren’t concerned with the food quality because they know the restaurants.',
			'e People feel they have the same options online, However...',
			'show e Think2 center with fadeIn',
			'e People are concerned with the price, the size of portions, getting what they ordered, the freshness/temperature of food and the delivery time.',
			'e Well, I’m definitely taking a pic of this survey!',
			'show e Doubt center with fadeIn',
			'p For real? isn’t this Top Secret?',
						
			'show e Mad center with fadeIn',			
			'e Shhh.',
			'e Zip it, or...',
			'p Easy Spidey!',
			'show e Normal center with fadeIn',			
			'e Let’s go get the fourth part!',
			
			//Spidey derrota al Cuarto
			'clear',
			'scene Street5',			
			
			'show e Doubt center with fadeIn',			
			'e I should really get paid for getting my hands dirty!',			
			
			'show e Normal center with fadeIn',			
			'e We took the fourth part without a fight.',
			'show e Think2 center with fadeIn',			
			'e This is a Dr. Octupus Trap!',
			'show e Think1 center with fadeIn',			
			'e C’mon! Let’s read this part.',
			'e When I heard about user-generated content... Well...',
			
			'show e Think2 center with fadeIn',			
			'e I thought I could upload funny pictures of me eating spicy food.',
			'e But, with great Power comes great Responsibility.',
			
			'show e Doubt center with fadeIn',			
			'p Sorry, What?',
			
			'show e Good center with fadeIn',			
			'e I just got caught up in the moment.',
			
			'show e Think1 center with fadeIn',			
			'e Well, the fourth part shows that depending on your objective you can generate several types of content.',
			
			'hide e with fadeOut',
			'show answers 4a top with fadeIn',
			'e ...',		
			'show answers 4b top with fadeIn',
			'e ...',
			'hide answers with fadeOut',			
			'clear',
			
			'show e Huge center with fadeIn',			
			'e My mind is officially blown.',
			'e According to this, if I take funny pictures of me...',
			'e I’d entertain people but, I won’t make any money.',
			'e This is nice!',
			'show e Think2 center with fadeIn',			
			'e If you want to make money, you should have ratings and reviews!',
			'e Simple, but, powerful.',				
			
			//Spidey derrota al Quinto
			'clear',
			'scene Street6',
			'play video Dandelion3',
			'e See! It was Doc. Oc.!',			
			
			'show e Mad center with fadeIn',
			'e Hey {{player.name}}! ',
			'e Get the blueprints!',
			'e Hurry up, this is a tough guy!',			
			
			'hide e with fadeOut',
			'clear',
			
			'p The new features are divided in 2 groups.',
			'p 1. The users need to be able to score the restaurants and write reviews.',
			'p 2. They should be able to read the content.',			
			
			'show e Good center with fadeIn',
			'e I’m done, let me see...',		
		
			'hide e with fadeOut',
			'show answers 5a top with fadeIn',
			'e Alright...',		
			'e A couple of minutes after my order arrived, I get the chance to answer a survey.',		
			'e If I answer the survey, I get extra points!',		
			'e I like this!',		
			'show answers 5b top with fadeIn',
			'e Look!',		
			'e If I write a review I can get even more points!',
			'e That’s AWESOME!',					
			'hide answers with fadeOut',
			
			'p ...',
			'show answers 5c top with fadeIn',
			'p Now, according to this...',		
			'p When I explore the restaurants, I can see their scores!',		
			'e That’s neat!',					
			'e Look! Look!',					
			'e If I hit the button, I can see more detailed reviews!',			
			'e No more doubts before placing an order for me!',					
			
			'e ...',		
			'hide answers with fadeOut',
			'clear',
								
			
			'show e Good center with fadeIn',
			'e Crystal clear to me. Very concrete!',
			'e Let’s get the implementation plans...',
			'show e Huge center with fadeIn',
			'e Can’t wait to post my reviews!',
			
			
			//Spidey derrota al Sexto
			'clear',
			'scene Street7',
			'play video Dandelion4',
			'e Now, the moment of truth!',			
			
			'show e Good center with fadeIn',
			'e Gotcha!',
			'e So here we have the implementation plans.',			
			'hide e with fadeOut',
			
			'e I’m so tired...',
			'e I need a rest...',
			'e I’ll let you read the last part.',
			'p Thanks... Finally!',
			
			'show answers 6a top with fadeIn',
			'e So the methodology they would use is SCRUM.',		
			'show answers 6b top with fadeIn',
			'e An agile methodology based on cycles.',								
			'show answers 6c top with fadeIn',				
			'e They propose to have 5 stages during each sprint...',					
			'e They want to make sure that before developing a product...',					
			'e There’s a market validation and a plan.',	
			
			'show answers 6d top with fadeIn',
			'e And finally, they say the best tool to use is JIRA.',		
			'e Maybe we can use it at SHIELD!',		
			'e Gotta tell the boss!',		
			'hide answers with fadeOut',
			
			'show e Good center with fadeIn',
			'e Our work here is complete!',
			'e Dr. Oc is not coming back for a while!',
			'show e Mad center with fadeIn',
			'e Alright, I shall head back to SHIELD now!',
			'hide e with fadeOut',
			
			//Final cambio de escena
			'clear',
			'scene Street',
			
			'p So we are done.',
			'p Thanks for sharing Spidey!',
			'show e Mad center with fadeIn',
			'e Thank you for coming along!',
			'show e Think2 center with fadeIn',			
			'e It’s always a pleasure!',
			'show e Huge center with fadeIn',
			'e That was a heck load of information!',
			'p Yeah, you were not supposed to read it Spidey!',
			'show e Mad center with fadeIn',
			'e All I know is that I saved the day, again...',
			'e And thanks to me you can see those AMAZING reviews.',
			'show e Dog1 center with fadeIn',
			'e Now...',
			'e If you’ll excuse me...',
			'show e Dog2 center with fadeIn',
			'e I’m gonna finish this delight!',
			'p See you Spidey!',
			
			'clear',
			'scene black with fadeIn',
			
			'particles universe',
			'centered Thanks for watching!',
			'centered Yours Sincerely. J Camilo Espitia',
			//Gracias
		],


	},

});