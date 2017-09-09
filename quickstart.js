const botbrain = require('./');

const network = new botbrain.NeuralNetwork(600, 'ring');

network.output([590,592]);
//network.output(2);
network.inputSite([3,5,7,9]);
//network.inputSite(4);

botbrain.Toolkit.verbose = true;
botbrain.Toolkit.visualise(network);

setInterval(() => network.input(Math.random()), 200);
