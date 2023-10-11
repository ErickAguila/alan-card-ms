import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('tipo_usuario')
export class TipoUsuario {
  @PrimaryGeneratedColumn('increment')
  idTipoUsuario: number;

  @Column({ type: 'varchar', length: 50, name: 'nombre' })
  nombre: string;

  @Column({ type: 'varchar', length: 100, name: 'descripcion' })
  descripcion: string;

  @OneToOne(() => Usuario, (usuario) => usuario.tipoUsuario)
  usuario?: Usuario;
}
