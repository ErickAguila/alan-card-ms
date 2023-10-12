import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { TipoUsuario } from '../../tipo-usuarios/entities/tipo-usuario.entity';
import { Orden } from '../../ordenes/entities/orden.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({ type: 'varchar', length: 50, name: 'nombre' })
  nombre: string;

  @Column({ type: 'varchar', length: 50, name: 'apellido' })
  apellido: string;

  @Column({ type: 'varchar', length: 100, name: 'email' })
  email: string;

  @Column({ type: 'varchar', length: 255, name: 'clave' })
  clave: string;

  @OneToOne(() => TipoUsuario, (tipoUsuario) => tipoUsuario.usuario)
  @JoinColumn({ name: 'idTipoUsuario' })
  tipoUsuario?: TipoUsuario;

  @Column()
  idTipoUsuario: number;

  @CreateDateColumn({ type: 'timestamp', name: 'fechaCreacion' })
  fechaCreacion?: Date;

  @OneToMany(() => Orden, (orden) => orden.usuario)
  Ordenes?: Orden[];
}
