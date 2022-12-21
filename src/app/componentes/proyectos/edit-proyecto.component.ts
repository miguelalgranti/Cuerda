import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyecto = null;

  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      {next: data =>{
        this.proyectos = data;
      },
       error:err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }}
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyectos).subscribe(
      {next: data => {
        this.router.navigate(['']);
      }, error: err =>{
         alert("Error al modificar el proyecto");
         this.router.navigate(['']);
      }}
    )
  }

}