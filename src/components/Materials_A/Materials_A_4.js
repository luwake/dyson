import Machines_C_3 from '../Machines_C/Machines_C_3'

export default function Materials_A_4 (output = 1) {
  return {
    name: '石矿',
    icon: '/static/img/materials/a4.png',
    machine: Machines_C_3((output / (60 / 0.3)).toFixed(1)),
    children: {},
    output
  }
}
