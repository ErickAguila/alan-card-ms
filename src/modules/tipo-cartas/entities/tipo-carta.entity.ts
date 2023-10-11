import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Carta } from '../../cartas/entities/carta.entity';

@Entity('tipo_carta')
export class TipoCarta {
  @PrimaryGeneratedColumn('increment')
  idTipoCarta?: number;

  @Column({ type: 'varchar', length: 50, name: 'nombre', nullable: false })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'descripcion',
    nullable: false,
  })
  descripcion: string;

  @OneToOne(() => Carta, (carta) => carta.tipoCarta) // specify inverse side as a second parameter
  carta?: Carta;
}
