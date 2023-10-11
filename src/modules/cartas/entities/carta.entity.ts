import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { TipoCarta } from '../../tipo-cartas/entities/tipo-carta.entity';
import { Habilidad } from '../../habilidades/entities/habilidade.entity';
import { Orden } from '../../ordenes/entities/orden.entity';

@Entity('carta')
export class Carta {
  @PrimaryGeneratedColumn('increment')
  idCarta?: number;

  @Column({ type: 'varchar', length: 50, name: 'nombre', nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 50, name: 'edicion', nullable: false })
  edicion: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'codigoSerie',
    nullable: false,
  })
  codigoSerie: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'numeroCarta',
    nullable: true,
  })
  numeroCarta: string;

  @Column({ name: 'precio', nullable: true })
  precio: number;

  @Column({ type: 'varchar', length: 1000, name: 'imagen', nullable: true })
  imagen: string;

  @Column({ name: 'cantidadEstrella', nullable: true })
  cantidadEstrellas: number;

  @OneToOne(() => TipoCarta, (tipoCarta) => tipoCarta.carta) // specify inverse side as a second parameter
  @JoinColumn({ name: 'idTipoCarta' }) // this decorator is optional for @ManyToOne, but required for @OneToOne
  tipoCarta?: TipoCarta;

  @Column()
  idTipoCarta: number;

  @OneToOne(() => Habilidad, (habilidad) => habilidad.carta) // specify inverse side as a second parameter
  @JoinColumn({ name: 'idHabilidad' }) // this decorator is optional for @ManyToOne, but required for @OneToOne
  habilidad?: Habilidad;

  @Column()
  idHabilidad: number;

  @OneToMany(() => Orden, (orden) => orden.carta)
  Ordenes?: Orden[];
}
