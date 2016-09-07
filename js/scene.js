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
				"matrix": [30,0,0,0,0,30,0,0,0,0,30,0,0,0,0,1],
				"children": [
					{
						"uuid": "60D4141E-CFB4-4506-BE8C-27EA80E13839",
						"type": "Mesh",
						"name": "Plane 1",
						"matrix": [30,0,0,0,0,6.661338147750939e-15,-30,0,0,30,6.661338147750939e-15,0,0,-30,0,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					},
					{
						"uuid": "1930A7B9-92D9-47F2-BB74-027B1AADFC8A",
						"type": "Mesh",
						"name": "Plane 3",
						"matrix": [30,0,0,0,0,-30,3.673940610695063e-15,0,0,-3.673940610695063e-15,-30,0,0,0,30,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					},
					{
						"uuid": "3591BE49-A8B8-4AA3-A90E-DC14A8F0102C",
						"type": "Mesh",
						"name": "Plane 2",
						"matrix": [30,0,0,0,0,6.661338147750939e-15,30,0,0,-30,6.661338147750939e-15,0,0,30,0,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					},
					{
						"uuid": "CD3A311E-F8AF-4CAE-97A5-7EAE7243D8BA",
						"type": "Mesh",
						"name": "Plane 4",
						"matrix": [-30,3.673940610695063e-15,4.540676538667056e-31,0,-3.673940610695063e-15,-30,-3.707744001554087e-15,0,0,-3.707744001554087e-15,30,0,0,0,-30,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					},
					{
						"uuid": "0088925D-8763-470B-AF54-6CB70334E261",
						"type": "Mesh",
						"name": "Plane 5",
						"matrix": [-6.661338147750939e-15,-5.715858372685534e-15,-30,0,3.4019626537656134e-29,-30,5.715858372685534e-15,0,-30,-3.3280069439011436e-29,6.661338147750939e-15,0,30,0,0,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					},
					{
						"uuid": "397E4B49-C301-49E3-8418-044C2D004A5B",
						"type": "Mesh",
						"name": "Plane 6",
						"matrix": [6.661338147750939e-15,-3.673940610695063e-15,30,0,0,-30,-3.673940610695063e-15,0,30,7.395570986446986e-31,-6.661338147750939e-15,0,-30,0,0,1],
						"geometry": "5364BABD-8988-4320-BC6D-AE7C7EE9BB1C",
						"material": "4C552F62-D034-450F-AB7A-448A765C61FD"
					}]
			}],
		"background": 11184810
	}
}