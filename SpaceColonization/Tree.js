function Tree() {
    this.leaves = [];
    this.branches = [];
  
    for (var i = 0; i < 1500; i++) {
      this.leaves.push(new Leaf());
    }
    var pos = createVector(width / 2, height);
    var dir = createVector(0, -1);
    var root = new Branch(null, pos, dir);
    this.branches.push(root);
    var current = root;
    var found = false;
    while (!found) {
      for (i = 0; i < this.leaves.length; i++) {
        var d = p5.Vector.dist(current.pos, this.leaves[i].pos);
        if (d < max_dist) {
          found = true;
        }
      }
      if (!found) {
        var branch = current.next();
        current = branch;
        this.branches.push(current);
      }
    }
  
    this.grow = function() {
      for (var i = 0; i < this.leaves.length; i++) {
        var leaf = this.leaves[i];
        var closestBranch = null;
        var record = max_dist;
        for (var j = 0; j < this.branches.length; j++) {
          var branch = this.branches[j];
          var d = p5.Vector.dist(leaf.pos, branch.pos);
          if (d < min_dist) {
            leaf.reached = true;
            closestBranch = null;
            break;
          } else if (d < record) {
            closestBranch = branch;
            record = d;
          }
        }
  
        if (closestBranch != null) {
          var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
          newDir.normalize();
          closestBranch.dir.add(newDir);
          closestBranch.count++;
        }
      }
  
      for (i = this.leaves.length - 1; i >= 0; i--) {
        if (this.leaves[i].reached) {
          this.leaves.splice(i, 1);
        }
      }
  
      for (i = this.branches.length - 1; i >= 0; i--) {
        var branchB = this.branches[i];
        if (branchB.count > 0) {
          branchB.dir.div(branchB.count + 1);
          this.branches.push(branchB.next());
          branchB.reset();
        }
      }
    };
  
    this.show = function() {
      for (var i = 0; i < this.leaves.length; i++) {
        this.leaves[i].show();
      }
  
      for (i = 0; i < this.branches.length; i++) {
        this.branches[i].show();
      }
    };
  }