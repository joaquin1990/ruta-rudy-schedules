const weekSchema = {
  lunes: ["08:00 - 10:00", "16:00 - 24:00"],
  martes: ["08:00 - 10:00", "16:00 - 24:00"],
  miercoles: ["08:00 - 10:00", "16:00 - 24:00"],
  jueves: ["08:00 - 10:00", "16:00 - 24:00"],
  viernes: ["08:00 - 10:00", "16:00 - 24:00"],
  sabado: ["08:00 - 10:00", "16:00 - 24:00"],
  domingo: ["08:00 - 10:00", "16:00 - 24:00"],
};

console.log(weekSchema.lunes[0]);

const rangoPrueba = Number(weekSchema.lunes[0]);
console.log(rangoPrueba);
