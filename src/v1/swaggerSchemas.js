const mongoose = require('mongoose');
const m2s = require('mongoose-to-swagger');
const home = mongoose.model(
  'homeSchema',
  {
    location: {
      coordinates: {
        type: Object,
        required: false,
      },
      city: {
        type: String,
        required: false,
      },
    },
    price: {
      type: Number,
      required: [false, 'Debe ingresar un precio.'],

    },

    images: {
      type: Array,
      required: [false, 'Debe ingresar las imagenes del inmueble.'],
    },
    amenities: {
      type: Array,
      required: [false, 'Debe ingresar las comodidades del inmueble.'],
    },
    capacity: {
      type: Number,
      required: [false, 'Debe ingresar la capacidad total del inmueble.'],
    },
    totalreviews: {
      type: Number,
      default: 0,
      required: false,
    },
    totalScore: {
      type: Number,
      default: 0,
      required: false,
    },
    scorearrays: {
      cleanlinessarray: {
        type: Array,
        required: false,
      },
      accuracyarray: {
        type: Array,
        required: false,
      },
      communicationarray: {
        type: Array,
        required: false,
      },
      locationarray: {
        type: Array,
        required: false,
      },
      checkinarray: {
        type: Array,
        required: false,
      },
      valuearray: {
        type: Array,
        required: false,
      },
    },
    scorecleanliness: {
      type: Number,
      default: 0,
      required: false,
    },
    scoreaccuracy: {
      type: Number,
      default: 0,
      required: false,
    },
    scorecommunication: {
      type: Number,
      default: 0,
      required: false,
    },
    scorelocation: {
      type: Number,
      default: 0,
      required: false,
    },
    scorecheckin: {
      type: Number,
      default: 0,
      required: false,
    },
    scorevalue: {
      type: Number,
      default: 0,
      required: false,
    },
    dates: {
      type: String,
      required: [
        false,
        'Debe ingresar las fechas de disponibilidad del inmueble.',
      ],
    },
    rooms: {
      type: Number,
      required: [
        false,
        'Debe ingresar el numero de habitaciones del inmueble.',
      ],
    },

  },
  {
    timestamps: false,
  }
);

// const swaggerSchema = m2s(home);
// console.log(swaggerSchema);

const user = mongoose.model('userSchema', {

    name: {
      type: String,
      required: [true, 'Debe ingresar un nombre.'],
      minlength: [4, 'El nombre es muy corto'],
      maxlength: [20, 'El nombre es muy largo'],
    },
    email: {
      type: String,
      required: [true, 'Debe ingresar un correo electronico.'],
      match: ['Ingrese un correo electronico valido'],
      validate: [
        {
          async validator(value) {
            try {
              const user = await models.Users.findOne({ email: value });
              return !user;
            } catch {
              return false;
            }
          },
          message: 'Ya existe un usuario registrado con ese correo',
        },
      ],
    },
    password: {
      type: String,
      required: [true, 'Debe ingresar una contraseña.'],
      minlength: [4, 'El password es muy corto'],
      //maxlength: [20, 'El password es muy largo'],
    },
    rol: {
      type: String,
      required: true,
      enum: {
        values: ['admin', 'host', 'client'],
        message: 'Invalid rol',
      },
    },
    location: {
      type: String,
      required: false,
    },
    reservations: {
      type: [{type:Object,ref:'Reservations'}],
      required: false,
    },
    profileimg: {
      type: String,
      required: false,
    },
    homes: {
      type: [{type:Object,ref:'Homes'}],
      required: false,
    },
    comments:{
      type:[{type:Object,ref:'Comments'}],
      required: false,
    }
  },
  {
    timestamps: true,
  },
)

const swaggerSchema = m2s(user);
console.log(swaggerSchema);

const payment = mongoose.model('paymentSchema', {
  cardBrand: {
    type: String,
    required: false,
  },
  cardNumber: {
    type: String,
    required: false,
  },
  cardExpMonth: {
    type: String,
    required: false,
  },
  cardExpYear: {
    type: String,
    required: false,
  },
  cardCvc: {
    type: String,
    required: false,
  },
  cardPostalCode: {
    type: String,
    required: false,
  },
  userId: {
    type: Object,
    ref: 'Users',
    required: false,
  },
})

// const swaggerSchema = m2s(payment);
// console.log(swaggerSchema);

const reservation = mongoose.model('reservationSchema', {
  initialDdate: {
    type: Number,
    required: true,
  },
  finalDate: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  guests: {
    type: {
      adults: {
        type: Number,
        required: true,
      },
      childs: {
        type: Number,
        required: false,
      },
      babys: {
        type: Number,
        required: false,
      },
      prependListener: {
        type: Number,
        required: false,
      },
    },
    required: true,
  },
  home: {
    type: Object,
    ref: "Homes",
    required: true,
  },
  user: {
    type: Object,
    ref: "Users",
    required: true,
  },
},
{
  timestamps: true,

  })

//   const swaggerSchema = m2s(reservation);
// console.log(swaggerSchema);