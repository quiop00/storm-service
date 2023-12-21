const mqtt = require('mqtt')
const protocol = 'mqtt'
const host = 'a3lafbeca71eu5-ats.iot.ap-southeast-1.amazonaws.com'
const port = '8883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `${protocol}://${host}:${port}`

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,

    ca: fs.readFileSync('./root_ca.crt'),
    key: fs.readFileSync('./private_key.key'),
    cert: fs.readFileSync('./root_ca.crt'),
})

client.on('connect', () => {
    console.log('Connected');

    // Listen  TOPIC back-end-exam
    client.subscribe(['back-end-exam'], () => {
        console.log(`Subscribe to topic '${topic}'`)
    });

    client.on('message', (topic, payload) => {
        // TODO exercise 5
        console.log('Received Message:', topic, payload.toString())
    })
})

