from db import database

class Player(database.db.Model):
    """Represents a soccer player with their positions and preferred foot."""
    __tablename__ = 'players'
    name = database.db.Column(database.db.String(64), primary_key=True)
    preferredFoot = database.db.Column(database.db.String(5), unique=False, nullable=False)
    primaryPosition = database.db.Column(database.db.String(3), unique=False, nullable=False)
    secondaryPosition = database.db.Column(database.db.String(3), unique=False, nullable=True)
    
    def __repr__(self):
        return f'<Player {self.name}>'
    
    def get_positions(self):
        """Returns a list of all player positions."""
        positions = [self.primaryPosition]
        if self.secondaryPosition:
            positions.append(self.secondaryPosition)
        return positions