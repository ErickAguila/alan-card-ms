import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Carta } from '../../cartas/entities/carta.entity';

@Entity('habilidad')
export class Habilidad {
  @PrimaryGeneratedColumn('increment')
  idHabilidad?: number;

  @Column({ type: 'varchar', length: 50, name: 'nombre', nullable: false })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'descripcion',
    nullable: false,
  })
  descripcion: string;

  @OneToOne(() => Carta, (carta) => carta.habilidad) // specify inverse side as a second parameter
  carta?: Carta;
}
