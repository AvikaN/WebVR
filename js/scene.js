{
	"metadata": {
		"version": 4.4,
		"type": "Object",
		"generator": "Object3D.toJSON"
	},
	"geometries": [
		{
			"uuid": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
			"type": "PlaneBufferGeometry",
			"width": 2,
			"height": 2
		}],
	"materials": [
		{
			"uuid": "4C552F62-D034-450F-AB7A-448A765C61FD",
			"type": "MeshStandardMaterial",
			"color": 0,
			"roughness": 0.5,
			"metalness": 0.5,
			"emissive": 0,
			"depthFunc": 3,
			"depthTest": true,
			"depthWrite": true,
			"skinning": false,
			"morphTargets": false
		}],
	"object": {
		"uuid": "63885EF4-9835-4845-AD4B-8BACD70E77D4",
		"type": "Scene",
		"name": "World",
		"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
		"children": [
			{
				"uuid": "541BACDA-A52B-4810-AC7D-575CA9E005D6",
				"type": "Group",
				"name": "scenery",
				"matrix": [35,0,0,0,0,35,0,0,0,0,35,0,0,0,0,1],
				"children": [
					{
						"uuid": "D082BB05-7C14-4502-A2AB-0009F0F0B55E",
						"type": "Mesh",
						"name": "Plane",
						"matrix": [30,0,0,0,0,30,0,0,0,0,30,0,0,0,-30,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					},
					{
						"uuid": "60D4141E-CFB4-4506-BE8C-27EA80E13839",
						"type": "Mesh",
						"name": "Plane 3",
						"matrix": [30,0,0,0,0,6.661338147750939e-15,-30,0,0,30,6.661338147750939e-15,0,0,-30,0,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					},
					{
						"uuid": "8253E96B-5123-4328-AF07-E72C6463B688",
						"type": "Mesh",
						"name": "Plane 2",
						"matrix": [-30,0,-3.673940610695063e-15,0,0,30,0,0,3.673940610695063e-15,0,-30,0,0,0,30,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					}]
			}],
		"background": 11184810
	}
}