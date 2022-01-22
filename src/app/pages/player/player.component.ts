import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CMSService } from '../../services/cms.service';
import { Player } from '../../interfaces/main.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: []
})
export class PlayerComponent implements OnInit {
  player!: Player;

  constructor(private CMS: CMSService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const _id: string | null = this.activatedRoute.snapshot.paramMap.get('_id')

    this.CMS.getPlayer(_id)
      .subscribe(resp => {
        this.player = resp
      }, (err) => {
        console.log(err)
      })
  }

}
