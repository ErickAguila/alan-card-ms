import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Carta } from '../../cartas/entities/carta.entity';

@Entity('orden')
export class Orden {
  @PrimaryGeneratedColumn('increment')
  idOrden: number;

  @ManyToOne(() => Carta, (carta) => carta.Ordenes)
  @JoinColumn({ name: 'idCarta' })
  carta?: Carta;

  @Column()
  idCarta: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.Ordenes)
  @JoinColumn({ name: 'idUsuario' })
  usuario?: Usuario;

  @Column()
  idUsuario: number;

  @Column({ name: 'total' })
  total: number;
}
