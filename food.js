var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("complex.proto"),
    Food = builder.build("Food"),
    Rice = Food.Rice.Rice;


// OR: Construct with values from an object, implicit message creation (address) and enum values as strings:
var rice = new Food({
    "type": "Junkfood",
    "vendor": {
        "name": "Brian dc.",
        "address": {
            "country": "ID"
        }
    },
    "level": "SUPERPEDAS" // also equivalent to "level": 2
});

// OR: It's also possible to mix all of this!

// Afterwards, just encode your message:
var buffer = rice.encode();
console.log(buffer);

var dbuffer = Rice.decode(buffer);
console.log(dbuffer);