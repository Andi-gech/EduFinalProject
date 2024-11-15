const mongoose = require("mongoose");
const joi = require("joi");
const Schema = mongoose.Schema;

const IDCardSchema = new Schema({
  EnglishFirstName: {
    type: String,
    required: true,
  },
  AmharicFirstName: {
    type: String,
    required: true,
  },
  EnglishMiddleName: {
    type: String,
    required: true,
  },
  AmharicMiddleName: {
    type: String,
    required: true,
  },
  EnglishLastName: {
    type: String,
    required: true,
  },
  AmharicLastName: {
    type: String,
    required: true,
  },
  IDNumber: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  National: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Qr: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
    required: true,
  },
  DateOfIssue: {
    type: Date,
    required: true,
  },
  DateOfExpiry: {
    type: Date,
    required: true,
  },
});

const IDCard = mongoose.model("IDCard", IDCardSchema);

const IDCardjoischema = joi.object({
  EnglishFirstName: joi.string().required(),
  AmharicFirstName: joi.string().required(),
  EnglishMiddleName: joi.string().required(),
  AmharicMiddleName: joi.string().required(),
  EnglishLastName: joi.string().required(),
  AmharicLastName: joi.string().required(),
  IDNumber: joi.string().required(),
  DateOfBirth: joi.date().required(),
  National: joi.string().required(),
  Gender: joi.string().required(),
  Qr: joi.string().required(),
  Photo: joi.string().required(),
  DateOfIssue: joi.date().required(),
  DateOfExpiry: joi.date().required(),
});
const ValidateIDCard = (IDCard) => {
  return IDCardjoischema.validate(IDCard);
};

module.exports = {
  IDCard,
  ValidateIDCard,
};
