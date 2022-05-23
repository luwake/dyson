import Products_B_6 from '../Products_B/Products_B_6'
import Products_F_6 from '../Products_F/Products_F_6'
import Machines_B_9 from '../Machines_B/Machines_B_9'
import Machines_D_8 from '../Machines_D/Machines_D_8'
import Machines_C_6 from '../Machines_C/Machines_C_6'
import Machines_D_6 from '../Machines_D/Machines_D_6'
import Materials_A_6 from '../Materials_A/Materials_A_6'
import Options from '../Options'

function Products_C_6_Line_1 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 4)
  } else {
    machine = output / (60 / 4)
  }
  return {
    name: '氢',
    icon: '/static/img/products/c6.png',
    machine: Machines_C_6(machine.toFixed(1)),
    children: [
      Materials_A_6(output * 2)
    ],
    output
  }
}
function Products_C_6_Line_2 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 2)
  } else {
    machine = output / (60 / 2)
  }
  return {
    name: '氢',
    icon: '/static/img/products/c6.png',
    machine: Machines_D_6(machine.toFixed(1)),
    children: [
      Products_B_6(output * 2)
    ],
    output
  }
}
function Products_C_6_Line_3 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 0.2)
  } else {
    machine = output / (60 / 0.2)
  }
  return {
    name: '氢',
    icon: '/static/img/products/c6.png',
    machine: Machines_D_8(machine.toFixed(1)),
    children: [],
    output
  }
}
function Products_C_6_Line_4 (output = 60, machine = 0) {
  if (machine > 0) {
    output = machine * (60 / 1)
  } else {
    machine = output / (60 / 1)
  }
  return {
    name: '氢',
    icon: '/static/img/products/c6.png',
    machine: Machines_B_9(machine.toFixed(1)),
    children: [
      Products_F_6(output)
    ],
    output
  }
}

export default function Products_C_6 (output = 60, machine = 0, options) {
  options = options || Options
  let line
  if (Object.prototype.hasOwnProperty.call(options.Lines, 'C_6')) {
    line = options.Lines.C_6
  } else {
    line = 1
  }
  switch (line) {
    case 4:
      return Products_C_6_Line_4(output, machine, options)
    case 3:
      return Products_C_6_Line_3(output, machine, options)
    case 2:
      return Products_C_6_Line_2(output, machine, options)
    case 1:
    default:
      return Products_C_6_Line_1(output, machine, options)
  }
}
