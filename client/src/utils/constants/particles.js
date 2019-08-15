const particles =
    {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 10,
                "random": true
            },
            "move": {
                "direction": "bottom",
                "out_mode": "out"
            },
            "line_linked": {
                "enable": false
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "remove": {
                    "particles_nb": 10
                }
            }
        }
    }
//
//
//
//
// {
//     "particles": {
//         "number": {
//             "value": 50
//         },
//         "size": {
//             "value": 3
//         },
//         "color": {
//             // "value": "#212529"
//         },
//         "line_linked": {
//             // "color": "#212529"
//         }
//     },
//     "interactivity": {
//         "events": {
//             "onhover": {
//                 "enable": true,
//                 "mode": "repulse"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "push"
//             }
//         }
//     }
// }







module.exports = {
    particles
}