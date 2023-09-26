const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

let exercises = {
    'Hanging Leg Raises' : {
        'instructions': '1) Hang on your chosen apperatus with a firm grip. 2)Raise your legs to a level that feels challenging but still enables you to keep good form. Strive to get them parallel to the ground (so that your hips are bent at 90 degrees), or a little higher if you can. 3)Lower your legs back down slowly until they return to the starting position, inhaling during this portion of the exercise. Maintain your posterior pelvic tilt, even at the bottom of the movement.',
        'photo': '',
        'video':'',
        'muscleGroups': 'Hip extensors, Abdominals', 
        'apperatus': 'Any aerial apperatus',
        'stopwatch': false,
        'description':'' ,
    },
    'Ring Push Ups' : {
        'instructions': '1) Place the rings over a bar. The straps should be adjusted so that the rings are around 2 inches above the ground. The two rings should be shoulder width apart. If using aerial straps or silks, perform a double-wrap before attempting this exercise. 2) Place your feet on a chair, bench or plyobox to elevate your feet. Perform a pushup while your feet are elevated. 3) To make Ring pushups more challenging,  end each repetition with a RTO or Ring turn out. This mean at the top of each ring pushup, keep your arms straight and turn your hands so that your elbows are facing back. This makes the ring pushup much more challenging and will also help translate to straight arm holds like the back lever and planche.',
        'photo': '',
        'video':'',
        'muscleGroups': 'Chest, Abdominals', 
        'apperatus': 'Rings, Aerial Straps, Silks',
        'stopwatch': false,
        'description': 'Pushups are the most utilized exercise in fitness. There are a few reasons for this, Pushups are safe, require no equipment and are an exercise that works many muscle groups at once. However, an underutilized variation is the ring pushup. Gymnastic Ring pushups are great because it incorporates a stabilization element and a pec fly element.' ,
    },
    'Meat Hook' : {
        'instructions': '1) Grab your chosen aerial apperatus tightly if it\'s a bar apperatus. Perform a double wrap if you\'re using aerial straps 2) Perform a windshield wiper toward your dominant arm 3) When your legs are all the way over to the side, lift your hips toward your elbow, folding your body around your arm. It may take some trial and error to get a feel for finding the “sweet spot” but at a certain point, you will feel your balance shift. 4) Once your hips are in position, begin to loosen the grip on your secondary hand, gradually transferring all of your weight to the other arm. When you feel confident enough to completely release your secondary hand from the bar, do so carefully. 5) You\'re now holding a meathook - congratulations! Stay here for a few seconds, then slowly reverse the movement and try it on the other side.',
        'photo': '',
        'video':'',
        'muscleGroups': 'Shoulders, Lats, Abdominals', 
        'apperatus': 'Aerial Straps, Lyra, Trapeze',
        'stopwatch': false,
        'description': 'Pushups are the most utilized exercise in fitness. There are a few reasons for this, Pushups are safe, require no equipment and are an exercise that works many muscle groups at once. However, an underutilized variation is the ring pushup. Gymnastic Ring pushups are great because it incorporates a stabilization element and a pec fly element.' ,
    }
}