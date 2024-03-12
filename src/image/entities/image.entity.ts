import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    source_path: string;

    @Column()
    created_at: Date;
}
