import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../Services/video.service';
import { videoModel } from '../../Model/video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {
  videoList: videoModel [] = [];
  videoObj: videoModel = new videoModel();
  videoSer = inject(VideoService);

  ngOnInit(): void {
      this.getVideos();
  }


  getVideos() {
   this.videoSer.getVideos().subscribe((result:any)=>{
    this.videoList = result.data;
   })
  }

  onEdit(data: videoModel){
    this.videoObj = data;
  }

  onUpdateVideo(){
    this.videoSer.updateVideo(this.videoObj).subscribe((result:any)=>{
      if(result.result){
        alert("video updated successfully");
        this.getVideos();
      } else{
        alert(result.message)
      }
    })
  }

  onSaveVideo(){
    this.videoSer.saveVideo(this.videoObj).subscribe((result:any)=>{
      if(result.result){
        alert("video saved success");
        this.getVideos();
      } else{
        alert(result.message)
      }
    })
  }

  deleteVideo(id: number){
    const isDelete = confirm("Are you sure you want to delete?");
    if(isDelete){
      this.videoSer.deleteVideo(id).subscribe((result:any)=>{
        if(result.result){
          alert("video deleted successfully");
          this.getVideos();
        } else{
          alert(result.message)
        }
      })
    }
  }
}
