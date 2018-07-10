<?php 
 //load directory helper
$dir = "uploads/images/"; // Your Path to folder
$map = directory_map($dir); /* This function reads the directory path specified in the first parameter and builds an array representation of it and all its contained files. */

foreach ($map as $k)
{?>
     <img src="<?php echo base_url($dir)."/".$k;?>" alt="">
   
<?php }
          
?> 